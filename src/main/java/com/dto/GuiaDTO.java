package com.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class GuiaDTO {
    private Long id;
    private String titulo;
    private String categoria;
    private String conteudo;
}
