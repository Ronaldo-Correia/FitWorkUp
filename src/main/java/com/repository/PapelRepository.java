package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.PapelEntity;

import java.util.Optional;

public interface PapelRepository extends JpaRepository<PapelEntity, Long> {

    Optional<PapelEntity> findByPapel(String papel);

}
