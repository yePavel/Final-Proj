import { useDispatch } from "react-redux";
import { useState } from "react";
import { ADD_CHECKLIST_ITEM } from "../store/reducers/board.reducer.js";
import { useSelector } from "react-redux";
import { makeId } from "../services/util.service.js";
import { updateTaskChecklists } from "../store/actions/board.actions.js";

export function ChecklistItem({ checklist, group }) {
    const task = useSelector(storeState => storeState.boardModule.task);
    const board = useSelector(storeState => storeState.boardModule.board);

    const [todoTitle, setTodoTitle] = useState('');
    const dispatch = useDispatch();

    function addTodo() {
        if (!todoTitle) return

        const updatedTodo = { id: makeId(4), title: todoTitle, isDone: false }
        const checklistIdx = task.checklists.findIndex(cl => cl.id === checklist.id)
        const updatedTodos = [...task.checklists[checklistIdx].todos, updatedTodo]

        const updatedTask = {
            ...task,
            checklists: task.checklists.map((cl, idx) =>
                idx === checklistIdx
                    ? { ...cl, todos: [...cl.todos, updatedTodo] }
                    : cl
            )
        };

        updateTaskChecklists(board?._id, group?.id, updatedTask)
        setTodoTitle("");
    }

    return (
        <div className="checklist-item-adder">
            <input className="item-input"
                type="text"
                placeholder="Add an item"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)} />
            <button className="add-checklist" onClick={addTodo}>
                Add
            </button>
        </div>
    );
}
