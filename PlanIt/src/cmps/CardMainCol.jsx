import { useSelector } from "react-redux";

import { CardDetailData } from "./CardDetailData";
import { ChecklistItem } from "./ChecklistItem";
import { CardActivity } from "./CardActivity";

import checklistIcon from '../assets/imgs/checklist-icon.svg';
import { ImParagraphLeft } from "react-icons/im";

export function CardMainCol() {
    const task = useSelector(storeState => storeState.boardModule.task);

    return (
        <div className="card-main-col">
            <CardDetailData task={task} />

            <div className="card-description">
                <ImParagraphLeft />
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
                            <div className="checklist-header">
                                <img src={checklistIcon} alt="Checklist Icon" />
                                {checklist.title}
                            </div>
                            <ul className="checklist-items">
                                {checklist.items && checklist.items.map((item, idx) => (
                                    <li key={idx}>
                                        <input type="checkbox" onChange={item.isChecked} />
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
