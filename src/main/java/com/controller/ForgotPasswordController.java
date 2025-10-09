package com.controller;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.*;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

import com.model.ForgotPasswordToken;
import com.repository.ForgotPasswordTokenRepository;
import com.service.UsuarioService;

import jakarta.mail.internet.MimeMessage;
import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/api")
public class ForgotPasswordController {

    private static final Logger logger = LoggerFactory.getLogger(ForgotPasswordController.class);

    private final UsuarioService usuarioService;
    private final ForgotPasswordTokenRepository tokenRepository;
    private final JavaMailSender mailSender;

    public ForgotPasswordController(UsuarioService usuarioService,
                                    ForgotPasswordTokenRepository tokenRepository,
                                    JavaMailSender mailSender) {
        this.usuarioService = usuarioService;
        this.tokenRepository = tokenRepository;
        this.mailSender = mailSender;
    }

    @PostMapping("/redefinir-senha")
    @Transactional
    public ResponseEntity<?> solicitarRedefinicao(@RequestBody EmailRequest request) {
        String email = request.getEmail();

        if (!usuarioService.existeUsuarioPorEmail(email)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new MensagemResponse("E-mail não encontrado."));
        }

        tokenRepository.deleteByEmail(email);
        String token = criarTokenRedefinicao(email);
        enviarEmailRedefinicao(email, token);

        return ResponseEntity.ok(new MensagemResponse("Enviamos um e-mail com instruções para redefinir sua senha."));
    }

    @PostMapping("/confirmar-redefinicao")
    public ResponseEntity<?> redefinirSenha(@RequestBody RedefinirSenhaRequest request) {
        String token = request.getToken();
        String novaSenha = request.getNovaSenha();
        String confirmacaoSenha = request.getConfirmacaoSenha();

        if (!novaSenha.equals(confirmacaoSenha)) {
            return ResponseEntity.badRequest().body(new MensagemResponse("As senhas não coincidem."));
        }

        Optional<ForgotPasswordToken> tokenOpt = tokenRepository.findByToken(token);
        if (tokenOpt.isEmpty() || tokenOpt.get().getDataExpiracao().isBefore(LocalDateTime.now())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new MensagemResponse("Token inválido ou expirado."));
        }

        usuarioService.updatePassword(tokenOpt.get().getEmail(), novaSenha);
        tokenRepository.delete(tokenOpt.get());

        return ResponseEntity.ok(new MensagemResponse("Senha redefinida com sucesso."));
    }

    private String criarTokenRedefinicao(String email) {
        String token = UUID.randomUUID().toString();
        ForgotPasswordToken redefinicao = new ForgotPasswordToken(
                null, token, email, LocalDateTime.now().plusHours(24));
        tokenRepository.save(redefinicao);
        return token;
    }

    private void enviarEmailRedefinicao(String email, String token) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            String resetLink = "https://fitworkup.com/redefinir-senha?token=" + token;

            helper.setTo(email);
            helper.setSubject("🔐 Redefinição de Senha - FitWorkUp");
            helper.setFrom("redefinirsenhasystem@gmail.com");

            String htmlMsg = """
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                        <h2 style="color: #E50914; text-align: center;">Redefinição de Senha</h2>
                        <p>Recebemos uma solicitação para redefinir sua senha. Clique abaixo:</p>
                        <div style="text-align: center;">
                            <a href="%s" style="padding: 12px 24px; background-color: #E50914; color: white; text-decoration: none; border-radius: 6px;">Redefinir Senha</a>
                        </div>
                        <p style="font-size: 12px; color: #94a3b8;">Este link expira em 24 horas.</p>
                    </div>
                    """.formatted(resetLink);

            helper.setText(htmlMsg, true);
            mailSender.send(message);
        } catch (Exception e) {
            logger.error("Erro ao enviar email para: {}", email, e);
            throw new RuntimeException("Falha ao enviar e-mail de redefinição", e);
        }
    }

    // DTOs internos
    static class EmailRequest {
        private String email;
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
    }

    static class RedefinirSenhaRequest {
        private String token;
        private String novaSenha;
        private String confirmacaoSenha;
        public String getToken() { return token; }
        public void setToken(String token) { this.token = token; }
        public String getNovaSenha() { return novaSenha; }
        public void setNovaSenha(String novaSenha) { this.novaSenha = novaSenha; }
        public String getConfirmacaoSenha() { return confirmacaoSenha; }
        public void setConfirmacaoSenha(String confirmacaoSenha) { this.confirmacaoSenha = confirmacaoSenha; }
    }

    static class MensagemResponse {
        private String mensagem;
        public MensagemResponse(String mensagem) { this.mensagem = mensagem; }
        public String getMensagem() { return mensagem; }
    }
}
