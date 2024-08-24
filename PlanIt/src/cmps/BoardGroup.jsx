import { useState } from "react";
import { AddTask } from "../cmps/AddTask.jsx";
import { LabelPreview } from "./LabelPreview.jsx";
import { AssignedMember } from "./AssignedMember.jsx";
import { GroupMenu } from "./GroupMenu.jsx";
import { CardModal } from "./CardModal.jsx";

export function BoardGroup({ groups, handleBoardUpdate }) {
  const [isAddingTask, setIsAddingTask] = useState(null);
  const [isTaskSelected, setIsTaskSelected] = useState(null)
  const [selectedTask, setSelectedTask] = useState(null);
  const [groupName, setGroupName] = useState(null)

  function handleTaskClick(task, groupName) {
    setSelectedTask(task)
    setGroupName(groupName)
    setIsTaskSelected(task.id)
  };

  function handleCloseModal() {
    setSelectedTask(null);
  };

  if (!groups) return <div>loading</div>;

  return (
    <div className="board-golders">
      {groups.map((group) => (
        <div key={group.id} className="group-card">
          <div className="group-header">
            <h3 className="group-title">{group.title}</h3>
            <GroupMenu />
          </div>
          <div className="tasks">
            {group.tasks.map((task) => (
              <div key={task.id} className="task"
                onClick={() => handleTaskClick(task, group.title)}>
                <LabelPreview labels={task.labels} />
                <p className="task-title">{task.title}</p>
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
      {isTaskSelected && (
        <CardModal task={selectedTask} groupName={groupName} onClose={handleCloseModal} />
      )}
    </div>
  );
}
