import { Link } from "react-router-dom";
import { BoardPreview } from "./BoardPreview.jsx";

export function BoardList({ boards }) {
    return <ul className="starred-boards-list">
        {boards.map(board =>
            <li key={board._id}>
                <BoardPreview board={board} />
            </li>
        )}
    </ul>

}