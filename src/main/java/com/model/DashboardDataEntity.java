package com.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Dashboard")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DashboardDataEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private int totalTarefas;
    private int tarefasConcluidas;
    private double progresso;

    @OneToOne
    @JoinColumn(name = "usuario_id")
    private UsuarioEntity usuario;
}
