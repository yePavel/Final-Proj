import { Link } from "react-router-dom";

export function BoardList({ boards }) {

    return <ul className="starred-boards-list">
        {boards.map(board =>
            <Link to={`${board._id}`} key={board._id}>
                <li className="board-item">
                    <div>{board.title}</div>
                </li>
            </Link>
        )}
    </ul>

}