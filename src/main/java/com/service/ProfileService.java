package com.service;

import com.dto.ProfileDTO;
import com.dto.EnderecoDTO;
import com.model.EnderecoEntity;
import com.model.ProfileEntity;
import com.model.UsuarioEntity;
import com.repository.ProfileRepository;
import com.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public ProfileEntity salvar(ProfileDTO dto) {
        ProfileEntity perfil = new ProfileEntity();
        perfil.setNome(dto.getNome());
        perfil.setPais(dto.getPais());
        perfil.setTelefone(dto.getTelefone());
        perfil.setGenero(dto.getGenero());
        perfil.setDataNascimento(java.time.LocalDate.parse(dto.getDataNascimento()));
        perfil.setPeso(dto.getPeso());
        perfil.setAltura(dto.getAltura());

        EnderecoDTO enderecoDTO = dto.getEndereco();
        EnderecoEntity endereco = new EnderecoEntity();
        endereco.setLocalizacao(enderecoDTO.getLocalizacao());
        endereco.setBairro(enderecoDTO.getBairro());
        endereco.setCep(enderecoDTO.getCep());
        perfil.setEndereco(endereco);

        Optional<UsuarioEntity> usuarioOpt = usuarioRepository.findByEmail(dto.getUsuario().getEmail());
        usuarioOpt.ifPresent(perfil::setUsuario);

        return profileRepository.save(perfil);
    }

    public Optional<ProfileEntity> buscarPorUsuarioId(Long usuarioId) {
        return profileRepository.findByUsuarioId(usuarioId);
    }

    public void deletar(Long id) {
        profileRepository.deleteById(id);
    }
}
