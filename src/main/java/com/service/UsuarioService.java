package com.service;

import com.dto.UsuarioDTO;
import com.model.UsuarioEntity;
import com.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UsuarioEntity salvar(UsuarioDTO dto) {
    UsuarioEntity usuario = new UsuarioEntity();
    usuario.setNome(dto.getNome());
    usuario.setEmail(dto.getEmail());
    usuario.setSenha(passwordEncoder.encode(dto.getSenha())); 
    return usuarioRepository.save(usuario);
}

public PasswordEncoder getPasswordEncoder() {
    return passwordEncoder;
}


    public Optional<UsuarioEntity> buscarPorEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    public Optional<UsuarioEntity> buscarPorId(Long id) {
        return usuarioRepository.findById(id);
    }

    public void deletar(Long id) {
        usuarioRepository.deleteById(id);
    }
    public boolean existeUsuarioPorEmail(String email) {
        return usuarioRepository.existsUsuarioEntityByEmail(email);
    }
    public void updatePassword(String email, String newPassword) {
        UsuarioEntity usuario = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        
        usuario.setSenha(passwordEncoder.encode(newPassword));
        usuarioRepository.save(usuario);
    }
    
}
