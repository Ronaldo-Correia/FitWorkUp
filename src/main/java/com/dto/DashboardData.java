package com.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DashboardData {
    private Long id;
    private int totalTarefas;
    private int tarefasConcluidas;
    private double progresso;
}
