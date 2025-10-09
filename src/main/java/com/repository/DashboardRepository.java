package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.model.DashboardDataEntity;

public interface DashboardRepository extends JpaRepository<DashboardDataEntity, Long> {
    DashboardDataEntity findByUsuarioId(Long usuarioId);


    
}

