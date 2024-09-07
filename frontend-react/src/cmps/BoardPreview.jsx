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

    const { style } = board
    console.log('style:', style)
    return <article>

        <Link to={`${board._id}`}>
            <li
                className="board-item"
                style={style.background.name ? { background: `linear-gradient(to bottom right, ${style.background.first}, ${style.background.second})` }
                    : { background: `linear-gradient(to bottom right, rgb(0 0 0), rgb(0 90 110))` }}>
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