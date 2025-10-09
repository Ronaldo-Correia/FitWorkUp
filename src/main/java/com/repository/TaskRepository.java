package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.model.TaskEntity;

public interface TaskRepository extends JpaRepository<TaskEntity, Long> {
    List<TaskEntity> findByUsuarioId(Long usuarioId);
}