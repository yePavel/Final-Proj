import StarIcon from '../assets/imgs/star-icon.svg';
import DropDownIcon from '../assets/imgs/dropdown-icon.svg';

export function BoardHeader({ board }) {
    return (
        <header className="board-header">
            <div className="board-header-left">
                <h2 className="board-title">{board.title}</h2>
                <img src={StarIcon} alt="Star Icon" className="board-star" />
                <button className="board-button">Board</button>
                <button className="board-button">Table</button>
                <button className="board-button">Calendar</button>
                <button className="board-button">Dashboard</button>
                <button className="board-button">Timeline</button>
                <button className="board-button">Map</button>
                <div className="dropdown">
                <img src={DropDownIcon} alt="drop-down Icon" className="board-drop-down" />
                    <div className="dropdown-content">
                        <button className="dropdown-item">Option 1</button>
                        <button className="dropdown-item">Option 2</button>
                    </div>
                </div>
            </div>
            <div className="board-header-right">
                <div className="board-members">
                    {board.members.map((member, idx) => (
                        <div key={idx} className="member-circle">
                            {member.initials}
                        </div>
                    ))}
                </div>
                <button className="board-button">Share</button>
                <span className="more-options">•••</span>
            </div>
        </header>
    );
}