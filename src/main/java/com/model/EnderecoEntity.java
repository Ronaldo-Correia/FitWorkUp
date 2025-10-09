package com.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
@Entity
@Table(name = "Endereco")
public class EnderecoEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "A localização não pode ser vazia")
    @Size(max = 100, message = "A cidade deve ter no máximo 100 caracteres")
    @Column(nullable = false, length = 100)
    private String localizacao;

    @NotBlank(message = "O bairro não pode ser vazio")
    @Size(max = 100, message = "O bairro deve ter no máximo 100 caracteres")
    @Column(nullable = false, length = 100)
    private String bairro;

    @NotBlank(message = "O CEP não pode ser vazio")
    @Size(max = 20, message = "O CEP deve ter no máximo 8 caracteres")
    @Column(nullable = false, length = 8)
    private String cep;

}