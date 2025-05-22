
import React from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
    const toggleCompleted = () => {
        onUpdate({ ...task, completed: !task.completed });
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <input type="checkbox" checked={task.completed} onChange={toggleCompleted} />
            <span
                style={{
                    marginLeft: 10,
                    textDecoration: task.completed ? 'line-through' : 'none',
                }}
            >
        {task.title}
      </span>

            <button
                style={{ marginLeft: 'auto', backgroundColor: 'red', color: 'white' }}
                onClick={() => onDelete(task.id)}
            >
                Sil
            </button>
        </div>
    );
};

export default TaskItem;
