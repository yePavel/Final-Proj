import { useSelector } from "react-redux";
import { updateTaskCover } from "../store/actions/board.actions";


export function PopOverCover({ group }) {
    const board = useSelector(storeState => storeState.boardModule.board)
    const task = useSelector(storeState => storeState.boardModule.task)

    const colors = [
        '#4EC19F',  // green
        '#F5D26D',  // yellow
        '#FAA874',  // orange
        '#F27B76',  // red
        '#B1A4F9',  // purple
        '#4A89F9',  // blue
        '#66C4DD',  // light blue
        '#9AD16D',  // greenish-yellow
        '#EC7FB5',  // pink
        '#7D8796'   // grey
    ];

    function handleSetCover(clr) {
        const updatedTask = { ...task, coverColor: clr || '' }
        updateTaskCover(board._id, group.id, updatedTask)
    }

    return <>
        <div className="pop-header">
            <h3>Cover</h3>
        </div>
        <div className="pop-content-container">
            <h4>Colors</h4>
            <div className="task-cover-colors">
                {colors.map(color =>
                    <button
                        key={color}
                        className="dropmenu-colored-btn"
                        onClick={() => handleSetCover(color)}
                        style={{ background: `${color}` }}
                    >
                    </button>
                )
                }
            </div>
        </div>
        <div className="pop-content-container">
            <h4>Photos from Unsplash</h4>
        </div>
    </>
}