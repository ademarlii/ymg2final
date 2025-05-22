import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
    if (tasks.length === 0) {
        return <p>Henüz görev yok.</p>;
    }

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default TaskList;
