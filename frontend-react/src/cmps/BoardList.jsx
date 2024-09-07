
import { BoardPreview } from "./BoardPreview.jsx";

export function BoardList({ boards }) {
    console.log("🚀 ~ BoardList ~ boards:", boards)

    return <ul className="starred-boards-list">
        {boards.map(board =>
            <li key={board._id}>
                <BoardPreview board={board} />
            </li>
        )}
    </ul>
}