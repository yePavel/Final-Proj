import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateTaskDates } from "../store/actions/board.actions";

export function PopOverDates({ group }) {
    const board = useSelector((storeState) => storeState.boardModule.board);
    const task = useSelector((storeState) => storeState.boardModule.task);
    const [dueDate, setDueDate] = useState(task.dueDate || "");

    useEffect(() => {
        setDueDate(task.dueDate || "");
    }, [task.dueDate]);

    function handleDateChange(ev) {
        const selectedDate = ev.target.value;
        setDueDate(selectedDate);
    }

    async function saveDate() {
        const updatedTask = { ...task, dueDate };
        try {
            await updateTaskDates(board._id, group.id, updatedTask);
        } catch (err) {
            console.error('Failed to update due date', err);
        }
    }

    async function removeDate() {
        const updatedTask = { ...task, dueDate: null };
        try {
            await updateTaskDates(board._id, group.id, updatedTask);
        } catch (err) {
            console.error('Failed to remove due date', err);
        }
    }

    return (
        <>
            <div className="pop-header">
                <h3>Dates</h3>
            </div>
            <div className="pop-content-container">
                <h4>Due Date</h4>
                <input
                    type="date"
                    value={dueDate}
                    onChange={handleDateChange}
                    placeholder="Select a due date"
                />
                <button className="save-btn" onClick={saveDate}>
                    Save
                </button>
                {dueDate && (
                    <button className="remove-btn" onClick={removeDate}>
                        Remove
                    </button>
                )}
            </div>
        </>
    );
}
