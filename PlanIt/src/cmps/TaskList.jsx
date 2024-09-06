import { Draggable } from "react-beautiful-dnd";
import { LabelPreview } from "./LabelPreview";
import { AssignedMember } from "./AssignedMember";

export function TaskList({ el, provided }) {

    return <div className="tasks">
        {el.tasks.map((item, index) => (
            <Draggable
                key={item.id}
                draggableId={item.id}
                index={index}
            >
                {(provided, snapshot) => (
                    <div className="task"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <LabelPreview labels={item.labels} />
                        <p className="task-title">{item.title}</p>
                        <AssignedMember members={item.members} />
                    </div>
                )}
            </Draggable>
        ))}
        {provided.placeholder}
    </div>

}