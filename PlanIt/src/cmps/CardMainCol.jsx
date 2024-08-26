import { ImParagraphLeft } from "react-icons/im";
import { CardActivity } from "./CardActivity";
import { CardDetailData } from "./CardDetailData";
import { useSelector } from "react-redux";

export function CardMainCol() {
    const task = useSelector(storeState => storeState.taskModule.task)

    return <div className="card-main-col">
        <CardDetailData task={task} />

        <div className="card-description">
            <ImParagraphLeft />
            <h3>Description</h3>
            {task.description && task.description.length ?
                <p>{`${task.description}`}</p> :
                <div className="card-desc-info">Add a more details description...</div>
            }
        </div>

        <CardActivity />
    </div>
}