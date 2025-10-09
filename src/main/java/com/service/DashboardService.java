package com.service;

import com.dto.DashboardData;
import com.model.DashboardDataEntity;
import com.repository.DashboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    @Autowired
    private DashboardRepository dashboardRepository;

    public DashboardData buscarPorUsuario(Long usuarioId) {
        DashboardDataEntity entity = dashboardRepository.findByUsuarioId(usuarioId);
        DashboardData dto = new DashboardData();
        dto.setId(entity.getId());
        dto.setTotalTarefas(entity.getTotalTarefas());
        dto.setTarefasConcluidas(entity.getTarefasConcluidas());
        dto.setProgresso(entity.getProgresso());
        return dto;
    }
}
