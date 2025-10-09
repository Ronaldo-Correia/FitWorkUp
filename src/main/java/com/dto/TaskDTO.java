package com.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TaskDTO {
    
    private String titulo;
    private String descricao;
    private boolean concluido;

}
