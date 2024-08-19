import { useState } from "react";

export function AddTask({ groupId, boards, setBoards, onCancel }) {
    const [taskTitle, setTaskTitle] = useState('');

    const handleInputChange = ({ target: { value } }) => setTaskTitle(value);

    const updateBoardsWithNewTask = () => {
        return boards.map(board => ({
            ...board,
            groups: board.groups.map(group =>
                group.id === groupId
                    ? { ...group, tasks: [...group.tasks, { id: Date.now(), title: taskTitle }] }
                    : group
            )
        }));
    };

    const handleAddTask = () => {
        if (taskTitle.trim()) {
            const updatedBoards = updateBoardsWithNewTask();
            setBoards(updatedBoards);
            localStorage.setItem('boards', JSON.stringify(updatedBoards));
            setTaskTitle('');
            onCancel();
        }
    };

    return (
        <section className="task-input">
            <input
                type="text"
                value={taskTitle}
                onChange={handleInputChange}
                placeholder="Enter a name for this card..."
            />
            <div className="task-actions">
                <button onClick={handleAddTask} className="add-card-btn">Add card</button>
                <button onClick={onCancel} className="delete-add-card">X</button>
            </div>
        </section>

    );
}
