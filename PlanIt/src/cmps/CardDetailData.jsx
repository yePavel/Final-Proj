import { useSelector, useDispatch  } from "react-redux"
import { AssignedMember } from "./AssignedMember"
import { LabelPreview } from "./LabelPreview"
import { LabelSelector } from "./LabelSelector";
import { ADD_LABEL } from "../store/reducers/board.reducer";

export function CardDetailData() {
    const dispatch = useDispatch();
    const task = useSelector(storeState => storeState.boardModule.task)

    function handleAddLabel(label) {
        dispatch({
            type: ADD_LABEL,
            taskId: task.id,
            label
        });
    }
    return <div className="card-detail-data">
        {task.members &&
            <div className="card-detail-item">
                <h3>Members</h3>
                <AssignedMember members={task.members} />
            </div>
        }
        {task.labels &&
            <div className="card-detail-item labels">
                <h3>Labels</h3>
                <LabelPreview labels={task.labels} onLabelClick={() => {}} />
                <LabelSelector onSave={handleAddLabel} />
            </div>
        }
        <div className="card-detail-item">
            <h3>Notifications</h3>
            <div>
                <a href="">Watching</a>
            </div>
        </div>
    </div>
}