import { Link } from "react-router-dom";

export function BoardPreview({ board }) {

    return <article>
        <Link to={`${board._id}`}>
            <li className="board-item">
                <div>{board.title}</div>
            </li>
        </Link>
    </article>
}