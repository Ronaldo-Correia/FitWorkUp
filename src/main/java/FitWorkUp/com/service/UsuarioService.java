package FitWorkUp.com.service;

import FitWorkUp.com.dto.UsuarioDTO;

public interface UsuarioService {
    void save(UsuarioDTO usuario);
    void updatePassword(String email, String newPassword);
    boolean existeUsuarioPorEmail(String email);
}