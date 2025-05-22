import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd({ title, description: '', dueDate: null, completed: false });
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Yeni görev gir..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Ekle</button>
        </form>
    );
};

export default TaskForm;
