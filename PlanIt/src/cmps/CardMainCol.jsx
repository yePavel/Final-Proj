import { useSelector, useDispatch } from "react-redux";
import { CardDetailData } from "./CardDetailData";
import { ChecklistItem } from "./ChecklistItem";
import { CardActivity } from "./CardActivity";
import checklistIcon from '../assets/imgs/checklist-icon.svg';
import { ImParagraphLeft } from "react-icons/im";
import { calculateChecklistProgress } from "../services/util.service";
import { TOGGLE_CHECKLIST_ITEM } from "../store/reducers/board.reducer";
import { BsTextParagraph } from "react-icons/bs";

export function CardMainCol() {
    const task = useSelector(storeState => storeState.boardModule.task);
    const dispatch = useDispatch();

    function checkboxChange(checklistTitle, itemIndex) {
        dispatch({
            type: TOGGLE_CHECKLIST_ITEM,
            checklistTitle,
            itemIndex
        });
    };

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
                            <img src={checklistIcon} alt="Checklist Icon" />
                            <h3>{checklist.title}</h3>
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
                                {checklist.items && checklist.items.map((item, idx) => (
                                    <li key={idx}>
                                        <input
                                            className="checkbox-item"
                                            type="checkbox"
                                            checked={item.isChecked}
                                            onChange={() => checkboxChange(checklist.title, idx)}
                                        />
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                            <ChecklistItem checklistTitle={checklist.title} />
                        </div>
                    ))}
                </div>
            )}

            <CardActivity />
        </div>
    );
}
