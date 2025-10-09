package com.controller;

import com.dto.GuiaDTO;
import com.model.GuiaEntity;
import com.service.GuiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/guias")
public class GuiaController {

    @Autowired
    private GuiaService guideService;

    @PostMapping
    public GuiaEntity criar(@RequestBody GuiaDTO dto) {
        return guideService.salvar(dto);
    }

    @GetMapping
    public List<GuiaEntity> listarTodos() {
        return guideService.listar();
    }

    @GetMapping("/{titulo}")
    public GuiaEntity buscarPorTitulo(@PathVariable String titulo) {
        return guideService.buscarPorTitulo(titulo);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        guideService.deletar(id);
    }
}
