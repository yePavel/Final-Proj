
import { BoardPreview } from "./BoardPreview.jsx";

export function StarredBoardList({ boards }) {

    return <ul className="starred-boards-list">
        {boards.map(board =>
            <li key={board._id}>
                <BoardPreview board={board} />
            </li>
        )}
    </ul>

}