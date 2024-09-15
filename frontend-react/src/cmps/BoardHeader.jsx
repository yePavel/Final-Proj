
import { MenuHeader } from './MenuHeader.jsx';

import { AssignedMember } from './AssignedMember.jsx';
import { MdOutlineKeyboardArrowDown, MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';


export function BoardHeader({ board }) {

    return (
        <header className="board-header" style={{
            background: `linear-gradient(to right, ${board?.style.background.first}, ${board?.style.background.second})`,
            color: `${board?.style.background.name ? '#F5F5F5' : `#172b4d`}`
        }}>
            <div className="board-header-left">
                <h2 className="board-title">{board.title}</h2>
                {board.isStarred ? <MdOutlineStarPurple500 /> : <MdOutlineStarOutline />}
                <button className="header-down-menu-btn">
                    <MdOutlineKeyboardArrowDown />
                </button>

            </div>
            <div className="board-header-right">
                <div className='members'>
                    <AssignedMember members={board.members} />
                </div>
                <MenuHeader />
            </div>
        </header>
    );
}
