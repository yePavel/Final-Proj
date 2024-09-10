import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IoMdClose } from "react-icons/io"
import { updateTaskChecklists } from "../store/actions/board.actions"
import { makeId } from "../services/util.service.js"

export function PopOverCheckList({ group }) {
    const [isVisible, setIsVisible] = useState(true)
    const [title, setTitle] = useState("")

    const board = useSelector(storeState => storeState.boardModule.board)
    const task = useSelector(storeState => storeState.boardModule.task)
    const dispatch = useDispatch()

    const handleClose = () => {
        setIsVisible(false)
    }

    function addChecklist() {
        if (!title) return

        const newChecklist = {
            id: makeId(),
            title,
            todos: []
        }


        const updatedTask = {
            ...task,
            checklists: [...(task.checklists || []), newChecklist]
        }

        dispatch(updateTaskChecklists(board?._id, group?.id, updatedTask))
        setIsVisible(false)
    }

    if (!isVisible) return null

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
    )
}