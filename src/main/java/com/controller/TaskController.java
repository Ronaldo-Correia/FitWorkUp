package com.controller;

import com.dto.TaskDTO;
import com.model.TaskEntity;
import com.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tarefas")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("/{usuarioId}")
    public TaskEntity criar(@PathVariable Long usuarioId, @RequestBody TaskDTO dto) {
        return taskService.salvar(usuarioId, dto);
    }

    @GetMapping("/{usuarioId}")
    public List<TaskEntity> listarPorUsuario(@PathVariable Long usuarioId) {
        return taskService.listarPorUsuario(usuarioId);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        taskService.deletar(id);
    }
}
