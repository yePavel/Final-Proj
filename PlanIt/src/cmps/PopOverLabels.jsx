import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTaskLabels } from "../store/actions/board.actions";
import { boardService } from "../services/board/board.service.local";
import { IoMdClose } from "react-icons/io";

export function PopOverLabels({ onSave, existingLabel, task = { labels: [] }, boardId, groupId }) {
  const [labels, setLabels] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchLabels() {
      const fetchedLabels = await boardService.getLabels(boardId);
      setLabels(fetchedLabels);
    }
    fetchLabels();

    if (existingLabel) {
      setSelectedLabel(existingLabel);
    }
  }, [existingLabel, boardId]);

  function handleLabelSelect(label) {
    setSelectedLabel(label);

    const isNew = !existingLabel;

    const updatedTask = {
      ...task,
      labels: isNew 
        ? [...task.labels, label] 
        : task.labels.map(l => l.id === label.id ? label : l)
    };

    dispatch(updateTaskLabels(boardId, groupId, updatedTask));

    onSave(label);
    setIsVisible(false);
  }

  function handleClose() {
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <>
      <div className="pop-header">
        <h3>Select Label</h3>
        <button className="close-pop" onClick={handleClose}>
          <IoMdClose />
        </button>
      </div>
      <div className="pop-content-container">
        <div className="label-options">
          {labels.map((label) => (
            <div
              key={label.id}
              className={`label-option ${selectedLabel?.id === label.id ? 'selected' : ''}`}
              onClick={() => handleLabelSelect(label)}
            >
              <div
                className="label-color"
                style={{
                  backgroundColor: label.color,
                }}
              />
              <span>{label.title}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
