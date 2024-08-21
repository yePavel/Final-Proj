import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

export function BoardPreview({ board }) {

    return <article>
        <Link to={`${board._id}`}>
            <li className="board-item">
                <div className="board-name">{board.title}</div>
                <div className="star"><FiStar /></div>
            </li>
        </Link>
    </article>
}