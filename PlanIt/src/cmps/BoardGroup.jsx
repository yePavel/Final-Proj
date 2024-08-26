import { useState } from "react";
import { AddTask } from "../cmps/AddTask.jsx";
import { LabelPreview } from "./LabelPreview.jsx";
import { AssignedMember } from "./AssignedMember.jsx";
import { GroupMenu } from "./GroupMenu.jsx";
import { CardModal } from "./CardModal.jsx";
import { loadTask } from "../store/actions/task.actions.js";
import { useSelector } from "react-redux";

export function BoardGroup({ groups, handleBoardUpdate }) {
  const currBoard = useSelector(storeState => storeState.boardModule.board)
  const [selectedTask, setSelectedTask] = useState(null)

  const [isAddingTask, setIsAddingTask] = useState(null);
  const [groupName, setGroupName] = useState(null)

  async function handleTaskClick(boardId, groupId, taskId, groupName) {
    await loadTask(boardId, groupId, taskId)
    setSelectedTask(taskId)
    setGroupName(groupName)
  };

  function handleCloseModal() {
    setSelectedTask(null);
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
                <div key={task.id} className="task"
                  onClick={() => handleTaskClick(currBoard._id, group.id, task.id, group.title)}>
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
        {selectedTask && (
          <CardModal groupName={groupName} onClose={handleCloseModal} />
        )}
      </div>
    </div>

  );
}
