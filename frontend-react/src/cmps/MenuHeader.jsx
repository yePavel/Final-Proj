import GroupMenuIcon from '../assets/imgs/group-menu-icon.svg';
import { PiWarningCircleBold } from "react-icons/pi";
import { useState } from "react";
import { ColorPicker } from './ColorPicker';

import { useSelector } from 'react-redux';
import { updateBoard } from '../store/actions/board.actions';

export function MenuHeader() {
    const board = useSelector(storeState => storeState.boardModule.board)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
        setIsColorPickerOpen(false);
    }

    function handleColorSelect(color) {
        board.style.background = color
        console.log('color:', color)
        updateBoard(board)
        setIsColorPickerOpen(false);
    }

    return (
        <section>
            <button className="menu-btn" onClick={toggleMenu}>
                <img src={GroupMenuIcon} alt="group-menu Icon" />
            </button>
            <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleMenu}>×</button>
                <h3 className='end-section'>Menu</h3>
                <ul className='menu-actions'>
                    <li><button> <PiWarningCircleBold /> About this board</button></li>
                    <li>
                        <button onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}>
                            Change background
                        </button>
                        {isColorPickerOpen && <ColorPicker onColorSelect={handleColorSelect} />}
                    </li>
                </ul>
            </div>
        </section>
    );
}