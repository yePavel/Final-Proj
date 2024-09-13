import { useEffect, useState } from "react"
import { GoChecklist } from "react-icons/go"
import { IoEyeOutline } from "react-icons/io5"
import { LuClock4 } from "react-icons/lu"

export function TaskModalPrev({ task }) {
    const [date, setDate] = useState('')
    const [checklistSum, setChecklistSum] = useState()
    const [checklistDone, setChecklistDone] = useState()

    useEffect(() => {
        if (task.dueDate) {
            const currDate = formatDate(task.dueDate)
            setDate(currDate)
        }
        getChecklistStatus()
    })

    function getChecklistStatus() {
        const sum = task.checklists.reduce((sum, cl) =>
            sum + cl.todos.length,
            0);
        setChecklistSum(sum)
        const doneSum = task.checklists.reduce((totalDoneSum, cl) => {
            const todoDoneSum = cl.todos.reduce((sum, todo) => sum + (todo.isDone ? 1 : 0), 0);
            return totalDoneSum + todoDoneSum;
        }, 0);
        setChecklistDone(doneSum)

    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    return <div className="task-modal-prev">
        {task.isWatching &&
            <span className="task-prev-item"><IoEyeOutline /></span>
        }

        {task.checklists.length > 0 &&
            <span className={`task-prev-item checklist ${checklistDone / checklistSum === 1 ? 'finished' : ''}`}><GoChecklist />
                {`${checklistDone}/${checklistSum}`}
            </span>
        }

        {typeof task.dueDate === 'string' && task.dueDate.length > 0 &&
            <span className="task-prev-item date"><LuClock4 />
                {`${date}`}
            </span>
        }

    </div >
}