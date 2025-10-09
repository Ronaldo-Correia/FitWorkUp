package com.mapping;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import com.dto.UsuarioDTO;
import com.model.UsuarioEntity;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UsuarioMapper {

    UsuarioEntity toEntity(UsuarioDTO dto);

}
