package com.controller;

import com.dto.ProfileDTO;
import com.model.ProfileEntity;
import com.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/perfis")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @PostMapping
    public ProfileEntity criar(@RequestBody ProfileDTO dto) {
        return profileService.salvar(dto);
    }

    @GetMapping("/usuario/{usuarioId}")
    public Optional<ProfileEntity> buscarPorUsuario(@PathVariable Long usuarioId) {
        return profileService.buscarPorUsuarioId(usuarioId);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        profileService.deletar(id);
    }
}
