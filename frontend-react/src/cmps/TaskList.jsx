import { Draggable } from "react-beautiful-dnd";
import { LabelPreview } from "./LabelPreview";
import { AssignedMember } from "./AssignedMember";
import { useSelector } from "react-redux";
import { useState } from "react";
import { loadTask } from "../store/actions/board.actions.js";
import { CardModal } from "./CardModal.jsx";
import { TaskModalPrev } from "./TaskModalPrev.jsx";

export function TaskList({ el, provided }) {
    const board = useSelector(storeState => storeState.boardModule.board)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currGroup, setGroup] = useState(null);

    async function onTaskClick(ev, boardId, group, taskId) {
        ev.stopPropagation();
        ev.preventDefault();
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
                    <div className={`task ${item.coverColor ? 'cover' : ''}`}
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
                        onClick={(ev) => onTaskClick(ev, board._id, el, item.id)}
                    >
                        {item.coverColor && <div className="task-prev-cover" style={{ background: `${item.coverColor}` }}></div>}
                        <div className="task-main-content">
                            <LabelPreview labels={item.labels} />
                            <p className="task-title">{item.title}</p>
                            <div className="task-prev">
                                <TaskModalPrev task={item} />
                                <AssignedMember members={item.members} />
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>
        ))}
        {provided.placeholder}

        {isModalOpen && (
            <CardModal group={currGroup} onClose={onCloseModal} />
        )}
    </div>

}