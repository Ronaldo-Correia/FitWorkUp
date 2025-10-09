package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.model.GuiaEntity;

public interface GuiaRepository extends JpaRepository<GuiaEntity, Long> {
GuiaEntity findByTitulo(String titulo);

    
}
