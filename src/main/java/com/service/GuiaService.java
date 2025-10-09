package com.service;

import com.dto.GuiaDTO;
import com.model.GuiaEntity;
import com.repository.GuiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GuiaService {

    @Autowired
    private GuiaRepository guideRepository;

    public GuiaEntity salvar(GuiaDTO dto) {
        GuiaEntity guia = new GuiaEntity();
        guia.setTitulo(dto.getTitulo());
        guia.setCategoria(dto.getCategoria());
        guia.setConteudo(dto.getConteudo());
        return guideRepository.save(guia);
    }

    public List<GuiaEntity> listar() {
        return guideRepository.findAll();
    }

    public GuiaEntity buscarPorTitulo(String titulo) {
        return guideRepository.findByTitulo(titulo);
    }

    public void deletar(Long id) {
        guideRepository.deleteById(id);
    }
}
