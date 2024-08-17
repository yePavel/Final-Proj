import React, { useState } from 'react'

export function AddGroup({ boardId, onAddGroup, onCancel }) {
    const [newGroupTitle, setNewGroupTitle] = useState('')

    const handleNewGroupChange = (event) => {
        setNewGroupTitle(event.target.value)
    };

    const handleAddGroup = () => {
        if (newGroupTitle.trim()) {
            onAddGroup(boardId, newGroupTitle)
            setNewGroupTitle('')
        }
    }

    return (
        <div className="add-group">
            <input
                type="text"
                value={newGroupTitle}
                onChange={handleNewGroupChange}
                placeholder="Entet list name..."
            />
            <button onClick={handleAddGroup} className="add-group-btn">Add Group</button>
            <button onClick={onCancel} className="cancel-add-group">X</button>
        </div>
    )
}
