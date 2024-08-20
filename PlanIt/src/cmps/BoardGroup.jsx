import { useState } from "react";
import { AddTask } from '../cmps/AddTask.jsx';
import { LabelPreview } from "./LabelPreview.jsx";
import { AssignedMember } from "./AssignedMember.jsx";

export function BoardGroup({ groups, handleBoardUpdate }) {
    const [isAddingTask, setIsAddingTask] = useState(null);

    if (!groups) return <div>loading</div>

    return <div className="board-golders">
        {groups.map((group) => (
            <div key={group.id} className="group-card">
                <h3 className="group-title">{group.title}</h3>
                <div className="tasks">
                    {group.tasks.map((task) => (
                        <div key={task.id} className="task">
                            <p className="task-title">{task.title}</p>
                            <LabelPreview labels={task.labels} />
                            <AssignedMember members={task.members} />
                        </div>
                    ))}
                </div>
                <div className="add-task">
                    {isAddingTask === group.id ? (
                        <AddTask
                            groupId={group.id}
                            onCancel={() => setIsAddingTask(null)}
                            handleBoardUpdate={handleBoardUpdate}
                        />
                    ) : (
                        <button
                            onClick={() => setIsAddingTask(group.id)}
                            className="add-a-card-btn">
                            + Add a card
                        </button>
                    )}
                </div>
            </div>
        ))}
    </div>

}

