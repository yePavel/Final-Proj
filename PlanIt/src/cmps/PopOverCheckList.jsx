import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_CHECKLIST } from "../store/reducers/board.reducer";
import { IoMdClose } from "react-icons/io";

export function PopOverCheckList() {
    const [isVisible, setIsVisible] = useState(true);
    const [title, setTitle] = useState("");
    const [items, setItems] = useState([""]); 
    const dispatch = useDispatch();

    const handleClose = () => {
        setIsVisible(false);
    };

    function addChecklist() {
        if(!title) return
        
        const checklist = {
            title,
            items: items.filter(item => item.trim() !== "")
        };
        dispatch({ type: ADD_CHECKLIST, checklist });
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
