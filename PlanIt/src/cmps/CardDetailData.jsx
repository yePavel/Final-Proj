import { useSelector } from "react-redux"
import { AssignedMember } from "./AssignedMember"
import { LabelPreview } from "./LabelPreview"


export function CardDetailData() {
    const task = useSelector(storeState => storeState.boardModule.task)

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
                <LabelPreview labels={task.labels} />
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