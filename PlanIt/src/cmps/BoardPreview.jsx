import { Link } from "react-router-dom";
import { addStaredBoard, removeStaredBoard } from "../store/actions/board.actions";
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";

export function BoardPreview({ board }) {

    function handleStarClick(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        const starStatus = board.isStarred
        const currBoard = { ...board, isStarred: !starStatus }
        if (!currBoard.isStarred) removeStaredBoard(currBoard)
        else addStaredBoard(currBoard)

    }

    return <article>
        <Link to={`${board._id}`}>
            <li className="board-item">
                <div className="board-name">{board.title}</div>
                <div className={`star ${board.isStarred ? 'star-filled' : ''}`}>
                    {board.isStarred ?
                        <MdOutlineStarPurple500 onClick={(ev) => handleStarClick(ev)} /> :
                        <MdOutlineStarOutline onClick={(ev) => handleStarClick(ev)} />
                    }
                </div>
            </li>
        </Link>
    </article>
}