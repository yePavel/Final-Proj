import React, { useEffect, useState } from "react";
import { getTaskById } from "../services/board/task.service.js";

export function TaskModal({ taskId, onClose }) {
  const [task, setTask] = useState(null);

  useEffect(() => {
    if (taskId) {
      const fetchedTask = getTaskById(taskId);
      setTask(fetchedTask);
    }
  }, [taskId]);

  if (!task) return null;

  const {
    title,
    description,
    labels,
    members,
    dueDate,
    priority,
    status,
    comments,
    checklists,
  } = task;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="task-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="close-btn">
            X
          </button>
        </div>
        <div className="modal-content">
          {description && (
            <section className="task-section">
              <h3>Description</h3>
              <p>{description}</p>
            </section>
          )}
          {labels && labels.length > 0 && (
            <section className="task-section">
              <h3>Labels</h3>
              <ul className="labels-list">
                {labels.map((label) => (
                  <li key={label.id} style={{ backgroundColor: label.color }}>
                    {label.title}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {members && members.length > 0 && (
            <section className="task-section">
              <h3>Members</h3>
              <ul className="members-list">
                {members.map((member) => (
                  <li key={member._id}>{member.fullname}</li>
                ))}
              </ul>
            </section>
          )}
          {dueDate && (
            <section className="task-section">
              <h3>Due Date</h3>
              <p>{new Date(dueDate).toLocaleDateString()}</p>
            </section>
          )}
          {priority && (
            <section className="task-section">
              <h3>Priority</h3>
              <p>{priority}</p>
            </section>
          )}
          {status && (
            <section className="task-section">
              <h3>Status</h3>
              <p>{status}</p>
            </section>
          )}
          {checklists && checklists.length > 0 && (
            <section className="task-section">
              <h3>Checklists</h3>
              {checklists.map((checklist) => (
                <div key={checklist.id} className="checklist">
                  <h4>{checklist.title}</h4>
                  <ul>
                    {checklist.todos.map((todo) => (
                      <li key={todo.id}>
                        <input type="checkbox" checked={todo.isDone} readOnly />
                        {todo.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}
          {comments && comments.length > 0 && (
            <section className="task-section">
              <h3>Comments</h3>
              <ul className="comments-list">
                {comments.map((comment) => (
                  <li key={comment.id}>
                    <strong>{comment.byMember.fullname}:</strong>{" "}
                    {comment.title}
                    <p>{new Date(comment.createdAt).toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
