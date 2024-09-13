import { useSelector } from "react-redux";
import { AssignedMember } from "./AssignedMember";
import { LabelPreview } from "./LabelPreview";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";
import { updateIsWatching } from "../store/actions/board.actions";

export function CardDetailData({ group }) {
  const board = useSelector((storeState) => storeState.boardModule.board);
  const task = useSelector((storeState) => storeState.boardModule.task);
  const [isWatching, setIsWatching] = useState(false)

  function handleIsWatching() {
    setIsWatching(res => !res)
    task.isWatching = isWatching
    updateIsWatching(board._id, group.id, task)
  }

  return (
    <div className="card-detail-data">
      {task.members.length > 0 && (
        <div className="card-detail-item">
          <h3>Members</h3>
          <AssignedMember members={task.members} />
        </div>
      )}
      {task.labels.length > 0 && (
        <div className="card-detail-item labels">
          <h3>Labels</h3>
          <LabelPreview labels={task.labels} onLabelClick={() => { }} />
        </div>
      )}
      <div className="card-detail-item">
        <h3>Notifications</h3>
        <div className={`watching-btn ${task.isWatching ? 'on' : ''}`} href="" onClick={handleIsWatching}>
          <span className="eye-icon"><IoEyeOutline /></span>
          {task.isWatching ?
            <div className="watching-on">
              <span className="watch-txt">Watching</span>
              <span className="isOn"><IoIosCheckmark className="checkmark" /></span>
            </div> :
            <div >
              <span className="watching-on">Watch</span>
            </div>
          }

        </div>
      </div>
    </div >
  );
}
