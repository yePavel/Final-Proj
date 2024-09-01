import { useState } from "react";
import { useSelector } from "react-redux";
import { getDefaultTask } from "../services/task/task.service.local";


export function AddTask({ groupId, onCancel, handleBoardUpdate }) {
    const [taskTitle, setTaskTitle] = useState('');
    const board = useSelector(storeState => storeState.boardModule.board)

    function handleInputChange({ target }) {
        const { value } = target
        setTaskTitle(value)
    }

    function onAddTask() {
        if (taskTitle.trim() === '') return; 

        const newTask = getDefaultTask()
        newTask.id = Date.now()
        newTask.title = taskTitle
        const updatedBoard = {
            ...board,
            groups: board.groups.map(group =>
                group.id === groupId
                    ? { ...group, tasks: [...group.tasks, newTask] }
                    : group
            )
        }
        handleBoardUpdate(updatedBoard)
        setTaskTitle('');
        onCancel();
    };

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            onAddTask();
        }
    }

    return (
        <section className="task-input">
            <input
                type="text"
                value={taskTitle}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter a name for this card..."
            />
            <div className="task-actions">
                <button onClick={onAddTask} className="add-card-btn">Add card</button>
                <button onClick={onCancel} className="delete-add-card">X</button>
            </div>
        </section>

    );
}
