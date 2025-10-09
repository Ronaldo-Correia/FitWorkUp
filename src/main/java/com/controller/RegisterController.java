package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dto.ProfileDTO;
import com.dto.UsuarioDTO;
import com.model.ProfileEntity;
import com.model.UsuarioEntity;
import com.service.ProfileService;
import com.service.UsuarioService;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/register")
public class RegisterController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private ProfileService profileService;

    @PostMapping("/register")
    public ResponseEntity<UsuarioEntity> registrarUsuario(@RequestBody UsuarioDTO dto) {
        UsuarioEntity newUser = usuarioService.salvar(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
        
    }

    @PostMapping("/profile")
    public ResponseEntity<ProfileEntity> completarPerfil(@RequestBody ProfileDTO dto) {
        ProfileEntity profile = profileService.salvar(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(profile);
    }
    
    
}
