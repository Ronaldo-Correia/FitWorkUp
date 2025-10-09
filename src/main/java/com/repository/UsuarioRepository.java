package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.model.UsuarioEntity;
import java.util.Optional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Long> {
    Optional<UsuarioEntity> findByEmail(String email);
    boolean existsUsuarioEntityByEmail(String email);

    @Modifying
    @Transactional
    @Query("UPDATE UsuarioEntity u SET u.senha = :newPassword WHERE u.email = :email")
    void updatePassword(@org.springframework.data.repository.query.Param("email") String email,
                       @org.springframework.data.repository.query.Param("newPassword") String newPassword);
}
