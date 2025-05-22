package com.ademarli.MyTask.service;

import com.ademarli.MyTask.model.Task;
import com.ademarli.MyTask.repository.TaskRepository;


import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TaskService {
    private final TaskRepository repo;

    public TaskService(TaskRepository repo) {
        this.repo = repo;
    }

    public List<Task> getAllTasks() {
        return repo.findAll();
    }

    public Task createTask(Task task) {
        Task task1=new Task();
        task1.setDueDate(LocalDate.now());
        return repo.save(task);
    }

    public Task updateTask(Long id, Task task) {
        Task existing = repo.findById(id).orElseThrow();
        existing.setTitle(task.getTitle());
        existing.setDueDate(task.getDueDate());
        existing.setCompleted(task.isCompleted());
        return repo.save(existing);
    }

    public void deleteTask(Long id) {
        repo.deleteById(id);
    }
}

