package com.repository;

import java.lang.foreign.Linker.Option;

import org.springframework.data.jpa.repository.JpaRepository;
import com.model.ProfileEntity;
import java.util.Optional;

public interface ProfileRepository extends JpaRepository<ProfileEntity, Long> {
     Optional<ProfileEntity> findByUsuarioId(Long usuarioId);    
}
