import { useState } from 'react';
import StarIcon from '../assets/imgs/star-icon.svg';
import DropDownIcon from '../assets/imgs/dropdown-icon.svg';
import { MenuHeader } from './MenuHeader.jsx';
import { Map } from './Map.jsx';
import { CustomCalendar } from './Calendar.jsx';

export function BoardHeader({ board }) {
    const [showMap, setShowMap] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);

    const handleMapButtonClick = () => {
        setShowMap(true);
    };

    const handleCloseMap = () => {
        setShowMap(false);
    };

    const handleCalendarButtonClick = () => {
        setShowCalendar(true);
    };

    const handleCloseCalendar = () => {
        setShowCalendar(false);
    };

    return (
        <header className="board-header">
            <div className="board-header-left">
                <h2 className="board-title">{board.title}</h2>
                <img src={StarIcon} alt="Star Icon" className="board-star" />
                <button className="board-button">Board</button>
                <button className="board-button">Table</button>
                <button className="board-button" onClick={handleCalendarButtonClick}>Calendar</button>
                {showCalendar && (
                    <div className="calendar-modal">
                        <div className="calendar-modal-content">
                            <button className="close-button" onClick={handleCloseCalendar}>Close</button>
                            <CustomCalendar />
                        </div>
                    </div>
                )}
                <button className="board-button">Dashboard</button>
                <button className="board-button">Timeline</button>
                <div className='map'>
                    <button className="board-button" onClick={handleMapButtonClick}>Map</button>
                </div>
                {showMap && (
                    <div className="map-modal">
                        <div className="map-modal-content">
                            <button className="close-button" onClick={handleCloseMap}>Close</button>
                            <Map />
                        </div>
                    </div>
                )}
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
                <MenuHeader />
            </div>
        </header>
    );
}
