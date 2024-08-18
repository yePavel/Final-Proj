import { useEffect, useState } from "react";
import { boardService } from "../services/board/board.service.local.js";
import { AddGroup } from "./AddGroup";
import { AddTask } from "./AddTask.jsx";

export function BoardList() {
  const [boards, setBoards] = useState([]);
  const [isAddingTask, setIsAddingTask] = useState(null);
  const [isAddingGroup, setIsAddingGroup] = useState(null);

  function loadBoards() {
    boardService
      .query()
      .then((data) => {
        setBoards(data);
      })
      .catch((error) => {
        console.error("Error loading boards", error);
      });
  }

  const getInitials = (fullname) => {
    const nameParts = fullname.split(" ");
    const initials = nameParts.map((part) => part[0].toUpperCase()).join("");
    return initials;
  };

  function addGroup(boardId, title) {
    setBoards((prevBoards) => {
      const updatedBoards = prevBoards.map((board) =>
        board.id === boardId
          ? {
              ...board,
              groups: [
                ...board.groups,
                { id: Date.now(), title: title, tasks: [] },
              ],
            }
          : board
      );

      localStorage.setItem("boards", JSON.stringify(updatedBoards));
      return updatedBoards;
    });
    setIsAddingGroup(null);
  }

  useEffect(() => {
    loadBoards();
  }, []);

  return (
    <div className="board-list">
      {boards.map((board) => (
        <div key={board.id} className="board-card">
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
                            style={{ backgroundColor: label.color }}
                          >
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
                      boards={boards}
                      setBoards={setBoards}
                      onCancel={() => setIsAddingTask(null)}
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
            {isAddingGroup === board.id ? (
              <AddGroup
                boardId={board.id}
                onAddGroup={addGroup}
                onCancel={() => setIsAddingGroup(null)}
              />
            ) : (
              <button
                onClick={() => setIsAddingGroup(board.id)}
                className="add-group-btn"
              >
                + Add another list
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
