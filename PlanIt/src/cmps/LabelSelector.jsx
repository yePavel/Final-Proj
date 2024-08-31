import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addLabel, updateLabel } from '../store/actions/board.actions';

export function LabelSelector({ onSave, existingLabel }) {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('#000000');
    const dispatch = useDispatch();

    useEffect(() => {
        if (existingLabel) {
            setTitle(existingLabel.title);
            setColor(existingLabel.color);
        }
    }, [existingLabel]);

    function handleSave() {
        if (!title) return;

        const label = { title, color };
        
        if (existingLabel) {
            // Update existing label
            dispatch(updateLabel({ ...existingLabel, ...label }));
        } else {
            // Add new label
            dispatch(addLabel(label));
        }

        onSave(label);
        setTitle('');
        setColor('#000000');
    }

    return (
        <div className="label-selector">
            <input
                type="text"
                placeholder="Label title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <button onClick={handleSave}>
                {existingLabel ? 'Update' : 'Save'}
            </button>
        </div>
    );
}
