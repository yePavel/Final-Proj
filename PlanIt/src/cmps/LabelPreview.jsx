import { useState } from "react";

export function LabelPreview({ labels, onLabelClick }) {
  const [selectedLabel, setSelectedLabel] = useState(null);

  function handleLabelClick(label) {
    setSelectedLabel(label);
    onLabelClick(label);
  }

  return (
    <div className="labels">
      {labels?.map((label) => (
        <span
          key={label.id}
          className={`label ${selectedLabel === label ? "selected" : ""}`}
          style={{ backgroundColor: label.color }}
          onClick={() => handleLabelClick(label)}
        >
          {label.title}
        </span>
      ))}
    </div>
  );
}
