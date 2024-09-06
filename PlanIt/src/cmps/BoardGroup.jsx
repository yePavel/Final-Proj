import { useState } from "react";
import { AddTask } from "../cmps/AddTask.jsx";
import { LabelPreview } from "./LabelPreview.jsx";
import { AssignedMember } from "./AssignedMember.jsx";
import { GroupMenu } from "./GroupMenu.jsx";
import { CardModal } from "./CardModal.jsx";
import { useSelector } from "react-redux";
import { loadTask } from "../store/actions/board.actions.js";
import { GoPlus } from "react-icons/go";
import { AddGroup } from "./AddGroup.jsx";

export function BoardGroup({ groups, handleBoardUpdate }) {
  const board = useSelector(storeState => storeState.boardModule.board)
  const [selectedTask, setSelectedTask] = useState(null)
  const [isAddingGroup, setIsAddingGroup] = useState(null);
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
    <ol className="board-container">

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
                  onClick={() => handleTaskClick(board._id, group, task.id)}>
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
                  <GoPlus className="plus-icon" />Add a card
                </button>
              )}
            </div>
          </div>
        ))}
        {selectedTask && (
          <CardModal group={currGroup} onClose={handleCloseModal} />
        )}
        <div className="add-group">
          {isAddingGroup === board.id ? (
            <AddGroup
              onCancel={() => setIsAddingGroup(null)} />
          ) : (
            <button
              onClick={() => setIsAddingGroup(board.id)}
              className="add-group-btn">
              + Add another list
            </button>
          )}
        </div>
      </div>
    </ol>
  );
}
