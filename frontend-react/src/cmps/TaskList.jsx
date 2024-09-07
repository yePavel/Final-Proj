import { Draggable } from "react-beautiful-dnd";
import { LabelPreview } from "./LabelPreview";
import { AssignedMember } from "./AssignedMember";
import { useSelector } from "react-redux";
import { useState } from "react";
import { loadTask } from "../store/actions/board.actions.js";
import { CardModal } from "./CardModal.jsx";

export function TaskList({ el, provided }) {
    const board = useSelector(storeState => storeState.boardModule.board)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currGroup, setGroup] = useState(null);

    async function onTaskClick(boardId, group, taskId) {
        await loadTask(boardId, group.id, taskId);
        setIsModalOpen(true);
        setGroup(group);
    }

    function onCloseModal() {
        setIsModalOpen(false);
    }

    return <div className="tasks">
        {el.tasks.map((item, index) => (
            <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                isDragDisabled={isModalOpen}
                index={index}
            >
                {(provided, snapshot) => (
                    <div className="task"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            ...provided.draggableProps.style,
                            cursor: snapshot.isDragging ? 'grab' : 'pointer',
                            transform: snapshot.isDragging
                                ? `${provided.draggableProps.style.transform} rotate(10deg)`
                                : provided.draggableProps.style.transform,
                            transition: 'transform 0.1s ease',
                            opacity: snapshot.isDragging ? 0.2 : 1,
                        }}
                        onClick={() => onTaskClick(board._id, el, item.id)}
                    >
                        <LabelPreview labels={item.labels} />
                        <p className="task-title">{item.title}</p>
                        <AssignedMember members={item.members} />

                        {isModalOpen && (
                            <CardModal group={currGroup} onClose={onCloseModal} />
                        )}

                    </div>
                )}
            </Draggable>
        ))}
        {provided.placeholder}
    </div>

}