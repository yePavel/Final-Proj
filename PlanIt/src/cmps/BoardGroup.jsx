import { useState } from "react";
import { AddTask } from "../cmps/AddTask.jsx";
import { LabelPreview } from "./LabelPreview.jsx";
import { AssignedMember } from "./AssignedMember.jsx";
import { TaskModal } from "./TaskModal.jsx"; 
import { GroupMenu } from "./GroupMenu.jsx";

export function BoardGroup({ groups, handleBoardUpdate }) {
  const [isAddingTask, setIsAddingTask] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const handleTaskClick = (taskId) => {
    setSelectedTaskId(taskId);
  };

  const handleCloseModal = () => {
    setSelectedTaskId(null);
  };

  if (!groups) return <div>loading</div>;

  return (
    <div className="board-container">

    <div className="board-golders">
      {groups.map((group) => (
        <div key={group.id} className="group-card">
          <div className="group-header">
            <h3 className="group-title">{group.title}</h3>
            <GroupMenu />
          </div>
          <div className="tasks">
            {group.tasks.map((task) => (
              <div
                key={task.id}
                className="task"
                onClick={() => handleTaskClick(task.id)} 
              >
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
                className="add-a-card-btn"
              >
                + Add a card
              </button>
            )}
          </div>
        </div>
      ))}
      {selectedTaskId && (
        <TaskModal taskId={selectedTaskId} onClose={handleCloseModal} />
      )}
    </div>
    </div>

  );
}
