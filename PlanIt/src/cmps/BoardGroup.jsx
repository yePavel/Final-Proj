import { useState } from "react";
import { AddTask } from "../cmps/AddTask.jsx";
import { LabelPreview } from "./LabelPreview.jsx";
import { AssignedMember } from "./AssignedMember.jsx";
import { GroupMenu } from "./GroupMenu.jsx";
import { CardModal } from "./CardModal.jsx";
import { useSelector } from "react-redux";
import { loadTask } from "../store/actions/board.actions.js";

export function BoardGroup({ groups, handleBoardUpdate }) {
  const currBoard = useSelector(storeState => storeState.boardModule.board)
  const [selectedTask, setSelectedTask] = useState(null)

  const [isAddingTask, setIsAddingTask] = useState(null);
  const [currGroup, setGroup] = useState(null)

  async function handleTaskClick(boardId, group, taskId) {
    await loadTask(boardId, group.id, taskId)
    setSelectedTask(taskId)
    setGroup(group)
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
                  onClick={() => handleTaskClick(currBoard._id, group, task.id)}>
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
          <CardModal group={currGroup} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
}
