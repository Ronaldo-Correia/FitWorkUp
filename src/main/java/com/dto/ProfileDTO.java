package com.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class ProfileDTO {

    private Long id;

    private UsuarioDTO usuario;

    @NotBlank(message = "Nome é obrigatório")
    @Size(min = 2, max = 100)
    private String nome;

    @NotBlank(message = "País é obrigatório")
    private String pais;

    @NotBlank(message = "Telefone é obrigatório")
    private String telefone;

    @Past(message = "Data de nascimento deve ser no passado")
    private String dataNascimento;

    @NotBlank(message = "Gênero é obrigatório")
    private String genero;

    @NotNull(message = "Endereço é obrigatório")
    private EnderecoDTO endereco;

    @NotNull(message = "Peso é obrigatório")
    private Double peso;

    @NotNull(message = "Altura é obrigatório")
    private Double altura;
}

