import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLabel, updateLabel } from "../store/actions/board.actions";
import { boardService } from "../services/board/board.service.local";
import { IoMdClose } from "react-icons/io";

export function PopOverLabels({ onSave, existingLabel }) {
  const [labels, setLabels] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchedLabels = boardService.getLabels();
    setLabels(fetchedLabels);

    if (existingLabel) {
      setSelectedLabel(existingLabel);
    }
  }, [existingLabel]);

  function handleLabelSelect(label) {
    setSelectedLabel(label);

    const labelToSave = { title: label.title, color: label.color };

    if (existingLabel) {
      dispatch(updateLabel({ ...existingLabel, ...labelToSave }));
    } else {
      dispatch(addLabel(labelToSave));
    }

    onSave(labelToSave);
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
              className="label-option"
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
