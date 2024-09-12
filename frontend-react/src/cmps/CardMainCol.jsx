import { useSelector, useDispatch } from "react-redux";
import { CardDetailData } from "./CardDetailData";
import { ChecklistItem } from "./ChecklistItem";
import { CardActivity } from "./CardActivity";
import { updateTaskChecklists } from "../store/actions/board.actions"
import { calculateChecklistProgress } from "../services/util.service";
import { TOGGLE_CHECKLIST_ITEM } from "../store/reducers/board.reducer";
import { BsTextParagraph } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";

export function CardMainCol({ group }) {
    const task = useSelector(storeState => storeState.boardModule.task);
    const board = useSelector(storeState => storeState.boardModule.board);


    const dispatch = useDispatch();

    function checkboxChange(checklistTitle, itemIndex) {
        dispatch({
            type: TOGGLE_CHECKLIST_ITEM,
            checklistTitle,
            itemIndex
        });
    };

    function deleteChecklist(checklist) {
        const newList = task?.checklists.filter(cl => cl.id !== checklist.id)
        const updatedTask = { ...task, checklists: newList }
        updateTaskChecklists(board?._id, group?.id, updatedTask)
    }

    return (
        <div className="card-main-col">
            <CardDetailData task={task} />

            <div className="card-description">
                <BsTextParagraph />
                <h3>Description</h3>
                {task.description && task.description.length ? (
                    <p>{task.description}</p>
                ) : (
                    <div className="card-desc-info">Add a more details description...</div>
                )}
            </div>

            {task.checklists && task.checklists.length > 0 && (
                <div className="checklists">
                    {task.checklists.map((checklist, index) => (
                        <div key={index} className="checklist">
                            <GoChecklist className="check-list-icon" />

                            <div className="checklist-title">
                                <h3>{checklist.title}</h3>
                                <button className="delete-checklist-btn" onClick={() => deleteChecklist(checklist)}>Delete</button>
                            </div>

                            <span className="checklist-percent">
                                {Math.round(calculateChecklistProgress(checklist))}%
                            </span>

                            <div className="checklist-progress">
                                <progress
                                    value={calculateChecklistProgress(checklist)}
                                    max="100"
                                ></progress>
                            </div>

                            <ul className="checklist-items">
                                {checklist.todos && checklist.todos.map((item, idx) => (
                                    <li key={idx}>
                                        <input
                                            className="checkbox-item"
                                            type="checkbox"
                                            checked={item.isDone}
                                            onChange={() => checkboxChange(checklist.title, idx)}
                                        />
                                        {item.title}
                                    </li>
                                ))}
                            </ul>

                            <ChecklistItem checklist={checklist} group={group} />
                        </div>
                    ))}
                </div>
            )}

            <CardActivity />
        </div>
    );
}
