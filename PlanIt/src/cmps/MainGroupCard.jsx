
import { GroupMenu } from "./GroupMenu";

import { AddTask } from "./AddTask";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { TaskList } from "./TaskList";
import { updateBoard } from "../store/actions/board.actions";

export function MainGroupCard({ provided, snapshot, el }) {
    const [isAddingTask, setIsAddingTask] = useState(null);

    function handleBoardUpdate(updatedBoard) {
        updateBoard(updatedBoard)
    }

    return <div
        ref={provided.innerRef}
        className="group-card"
    >
        <div className="group-header">
            <h3 className="group-title">{el.title}</h3>
            <GroupMenu />
        </div>

        <TaskList el={el} provided={provided} />

        <div className="add-task">
            {isAddingTask === el.id ? (
                <AddTask
                    groupId={el.id}
                    onCancel={() => setIsAddingTask(null)}
                    handleBoardUpdate={handleBoardUpdate}
                />
            ) : (
                <button
                    onClick={() => setIsAddingTask(el.id)}
                    className="add-a-card-btn"
                >
                    <GoPlus className="plus-icon" />Add a card
                </button>
            )}
        </div>
    </div>
}