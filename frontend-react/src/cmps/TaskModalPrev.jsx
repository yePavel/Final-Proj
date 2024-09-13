import { GoChecklist } from "react-icons/go"
import { IoEyeOutline } from "react-icons/io5"
import { LuClock4 } from "react-icons/lu"

export function TaskModalPrev({ task }) {

    return <div className="task-modal-prev">
        {task.isWatching &&
            <span className="task-prev-item"><IoEyeOutline /></span>
        }

        {task.checklists.length > 0 &&
            <span className="task-prev-item"><GoChecklist />
                {`0/${task.checklists.length}`}
            </span>
        }

        {typeof task.dueDate === 'string' &&
            <span className="task-prev-item"><LuClock4 />
                {`${task.dueDate}`}
            </span>
        }

    </div >
}