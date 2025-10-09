package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.model.EnderecoEntity;

public interface EnderecoRepository extends JpaRepository<EnderecoEntity, Long> {

     EnderecoEntity findByLocalizacao(String localizacao);
}
