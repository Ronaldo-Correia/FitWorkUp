package com.controller;

import com.dto.DashboardData;
import com.model.DashboardDataEntity;
import com.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/{usuarioId}")
    public DashboardData buscarPorUsuario(@PathVariable Long usuarioId) {
        return dashboardService.buscarPorUsuario(usuarioId);
    }
}
