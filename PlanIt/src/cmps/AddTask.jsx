import { useState } from "react";
import { useSelector } from "react-redux";
import { updateBoard } from "../store/actions/board.actions";


export function AddTask({ groupId, onCancel, handleBoardUpdate }) {
    const [taskTitle, setTaskTitle] = useState('');
    const board = useSelector(storeState => storeState.boardModule.board)

    function handleInputChange({ target }) {
        const { value } = target
        setTaskTitle(value)
    }

    function onAddTask() {
        const updatedBoard = {
            ...board,
            groups: board.groups.map(group =>
                group.id === groupId
                    ? { ...group, tasks: [...group.tasks, { id: Date.now(), title: taskTitle }] }
                    : group
            )
        }
        handleBoardUpdate(updatedBoard)
        setTaskTitle('');
        onCancel();
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
                <button onClick={onAddTask} className="add-card-btn">Add card</button>
                <button onClick={onCancel} className="delete-add-card">X</button>
            </div>
        </section>

    );
}
