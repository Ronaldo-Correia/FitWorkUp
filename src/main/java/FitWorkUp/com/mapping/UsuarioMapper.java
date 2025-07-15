package FitWorkUp.com.mapping;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import FitWorkUp.com.dto.UsuarioDTO;
import FitWorkUp.com.entity.UsuarioEntity;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UsuarioMapper {

    UsuarioEntity toEntity(UsuarioDTO dto);

}
