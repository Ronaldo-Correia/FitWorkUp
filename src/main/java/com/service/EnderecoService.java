package com.service;

import com.dto.EnderecoDTO;
import com.model.EnderecoEntity;
import com.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EnderecoService {

    @Autowired
    private EnderecoRepository enderecoRepository;

    public EnderecoEntity salvar(EnderecoDTO dto) {
        EnderecoEntity endereco = new EnderecoEntity();
        endereco.setLocalizacao(dto.getLocalizacao());
        endereco.setBairro(dto.getBairro());
        endereco.setCep(dto.getCep());
        return enderecoRepository.save(endereco);
    }

    public EnderecoEntity buscarPorId(Long id) {
        return enderecoRepository.findById(id).orElseThrow();
    }

    public void deletar(Long id) {
        enderecoRepository.deleteById(id);
    }
}
