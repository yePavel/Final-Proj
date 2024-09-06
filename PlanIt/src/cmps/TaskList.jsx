import { Draggable } from "react-beautiful-dnd";
import { LabelPreview } from "./LabelPreview";
import { AssignedMember } from "./AssignedMember";
import { useSelector } from "react-redux";
import { useState } from "react";
import { loadTask } from "../store/actions/board.actions.js";
import { CardModal } from "./CardModal.jsx";

export function TaskList({ el, provided }) {
    const board = useSelector(storeState => storeState.boardModule.board)
    
    const [selectedTask, setSelectedTask] = useState(null);
    const [currGroup, setGroup] = useState(null);

    async function onTaskClick(boardId, group, taskId) {
        await loadTask(boardId, group.id, taskId);
        setSelectedTask(taskId);
        setGroup(group);
    }

    function onCloseModal() {
        setSelectedTask(null);
    }

    return <div className="tasks">
        {el.tasks.map((item, index) => (
            <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                index={index}
            >
                {(provided, snapshot) => (
                    <div className="task"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={() => onTaskClick(board._id, el, item.id)}
                    >
                        <LabelPreview labels={item.labels} />
                        <p className="task-title">{item.title}</p>
                        <AssignedMember members={item.members} />

                        {selectedTask && (
                            <CardModal group={currGroup} onClose={onCloseModal} />
                        )}

                    </div>
                )}
            </Draggable>
        ))}
        {provided.placeholder}
    </div>

}