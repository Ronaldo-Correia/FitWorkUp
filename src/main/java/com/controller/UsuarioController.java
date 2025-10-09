package com.controller;

import com.dto.UsuarioDTO;
import com.model.UsuarioEntity;
import com.service.UsuarioService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public UsuarioEntity criar(@RequestBody UsuarioDTO dto) {
        return usuarioService.salvar(dto);
    }

    @GetMapping("/{email}")
    public Optional<UsuarioEntity> buscarPorEmail(@PathVariable String email) {
        return usuarioService.buscarPorEmail(email);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        usuarioService.deletar(id);
    }
    @PostMapping
public ResponseEntity<?> criar(@RequestBody @Valid UsuarioDTO dto) {
    if (usuarioService.existeUsuarioPorEmail(dto.getEmail())) {
        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body("Email já está em uso.");
    }

    UsuarioEntity novo = usuarioService.salvar(dto);
    return ResponseEntity.ok(novo);
}

}
