package com.service;

import com.dto.TaskDTO;
import com.model.TaskEntity;
import com.model.UsuarioEntity;
import com.repository.TaskRepository;
import com.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public TaskEntity salvar(Long usuarioId, TaskDTO dto) {
        UsuarioEntity usuario = usuarioRepository.findById(usuarioId).orElseThrow();
        TaskEntity tarefa = new TaskEntity();
        tarefa.setTitulo(dto.getTitulo());
        tarefa.setDescricao(dto.getDescricao());
        tarefa.setConcluido(dto.isConcluido());
        tarefa.setUsuario(usuario);
        return taskRepository.save(tarefa);
    }

    public List<TaskEntity> listarPorUsuario(Long usuarioId) {
        return taskRepository.findByUsuarioId(usuarioId);
    }

    public void deletar(Long id) {
        taskRepository.deleteById(id);
    }
}
