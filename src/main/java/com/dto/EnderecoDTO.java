package com.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EnderecoDTO {

    private Long id;

    private String localizacao;

    private String bairro;

    private String cep;
    
    
}
