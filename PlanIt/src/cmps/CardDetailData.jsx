import { useSelector } from "react-redux";
import { AssignedMember } from "./AssignedMember";
import { LabelPreview } from "./LabelPreview";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";

export function CardDetailData() {
  const task = useSelector((storeState) => storeState.boardModule.task);
  const [isWatching, setIsWatching] = useState(false)

  function toggleIsWatching() {
    setIsWatching(res => !res)
  }
  console.log('task:', task)

  return (
    <div className="card-detail-data">
      {task.members && (
        <div className="card-detail-item">
          <h3>Members</h3>
          <AssignedMember members={task.members} />
        </div>
      )}
      {task.labels && (
        <div className="card-detail-item labels">
          <h3>Labels</h3>
          <LabelPreview labels={task.labels} onLabelClick={() => { }} />
        </div>
      )}
      <div className="card-detail-item">
        <h3>Notifications</h3>
        <div className={`watching-btn ${isWatching ? 'on' : ''} `} href="" onClick={toggleIsWatching}>
          <span className="icon"><IoEyeOutline /></span>

          {isWatching ?
            <div className="watching-on">
              <span>Watching</span>
              <span className="isOn"><IoIosCheckmark className="checkmark" /></span>
            </div> :
            <div>
              <span>Watch</span>
            </div>
          }

        </div>
      </div>
    </div >
  );
}
