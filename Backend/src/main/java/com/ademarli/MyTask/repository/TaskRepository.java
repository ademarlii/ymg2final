package com.ademarli.MyTask.repository;

import com.ademarli.MyTask.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
