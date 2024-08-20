import { useState } from 'react';
import { AddTask } from './AddTask.jsx';

export function BoardPreview({ board, handleBoardUpdate }) {
    const [isAddingTask, setIsAddingTask] = useState(null);

    const getInitials = (fullname) => {
        const nameParts = fullname.split(" ");
        const initials = nameParts.map((part) => part[0].toUpperCase()).join("");
        return initials;
    };

    return (
        <section key={board.id} className="board-card">
            <h2 className="board-title">{board.title}</h2>
            <div className="board-golders">
                {board.groups.map((group) => (
                    <div key={group.id} className="group-card">
                        <h3 className="group-title">{group.title}</h3>
                        <div className="tasks">
                            {group.tasks.map((task) => (
                                <div key={task.id} className="task">
                                    <p className="task-title">{task.title}</p>
                                    <div className="labels">
                                        {board.labels.map((label) => (
                                            <span
                                                key={label.id}
                                                className="label"
                                                style={{ backgroundColor: label.color }}>
                                                {label.title}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="members">
                                        {board.members.map((member) => (
                                            <div key={member._id} className="member">
                                                {getInitials(member.fullname)}
                                            </div>
                                        ))}
                                    </div>
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
        </section>
    );
};