import { useState } from 'react';

export function AddGroup({ boardId, onAddGroup, onCancel }) {
    const [newGroupTitle, setNewGroupTitle] = useState('');
    const [error, setError] = useState('');

    function handleNewGroupChange(event) {
        setNewGroupTitle(event.target.value);
    }

    async function addGroup() {
        if (newGroupTitle.trim()) {
            try {
                await onAddGroup(boardId, newGroupTitle);
                setNewGroupTitle('');
                setError('');
            } catch (e) {
                setError('Failed to add group. Please try again.');
            }
        } else {
            setError('Group title cannot be empty.');
        }
    }

    return (
        <div className="add-group">
            <input
                type="text"
                value={newGroupTitle}
                onChange={handleNewGroupChange}
                placeholder="Enter list name..."
            />
            <button onClick={addGroup} className="add-group-btn">
                Add Group
            </button>
            <button onClick={onCancel} className="cancel-add-group">
                X
            </button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}
