import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { updateTaskChecklists } from "../store/actions/board.actions";

export function PopOverCheckList({ group }) {
    const [isVisible, setIsVisible] = useState(true);
    const [title, setTitle] = useState("");
    const [items, setItems] = useState([""]);

    const board = useSelector(storeState => storeState.boardModule.board);
    const task = useSelector(storeState => storeState.boardModule.task);
    const dispatch = useDispatch();

    const handleClose = () => {
        setIsVisible(false);
    };

    const addChecklist = () => {
        if (!title) return;
    
        const newChecklist = {
            id: Date.now().toString(),
            title,
            items: items.filter(item => item.trim() !== "")
        };
    
        if (!group || !group.id) {
            console.error('Group or group ID is missing.');
            return;
        }
    
        const updatedTask = {
            ...task,
            checklists: [...(task.checklists || []), newChecklist]
        };
    
        dispatch(updateTaskChecklists(board._id, group.id, updatedTask));
        setIsVisible(false);
    };
    
    if (!isVisible) return null;

    return (
        <>
            <div className="pop-header">
                <h3>Add checklist</h3>
                <button className="close-pop" onClick={handleClose}>
                    <IoMdClose />
                </button>
            </div>
            <div className="pop-content-container">
                <h4>Title</h4>
                <input 
                    type="text" 
                    placeholder="Add a checklist title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <button className="add-checklist" onClick={addChecklist}>
                Add
            </button>
        </>
    );
}