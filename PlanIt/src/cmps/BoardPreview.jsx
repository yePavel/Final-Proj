import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import { addStaredBoard } from "../store/actions/board.actions";

export function BoardPreview({ board }) {

    function handleStarClick(ev, type) {
        ev.stopPropagation();
        ev.preventDefault();
        const starStatus = board.isStarred
        const currBoard = { ...board, isStarred: !starStatus }
        if (type === 'ADD') addStaredBoard(currBoard)
        else removeStaredBoard()


    }

    return <article>
        <Link to={`${board._id}`}>
            <li className="board-item">
                <div className="board-name">{board.title}</div>
                <div className="star"><FiStar onClick={(ev) => handleStarClick(ev, 'ADD')} /></div>
            </li>
        </Link>
    </article>
}