import GroupMenuIcon from '../assets/imgs/group-menu-icon.svg';
import { PiWarningCircleBold } from "react-icons/pi";
import { MdMailOutline } from "react-icons/md";
import { useState } from "react";
import { ColorPicker } from './ColorPicker';

import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../store/actions/board.actions';
import { useEffect } from 'react';

export function MenuHeader() {
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

    useEffect(() => {
        const savedColor = localStorage.getItem('backgroundColor');
        if (savedColor) {
            dispatch(setBackgroundColor(savedColor));
        }
    }, [dispatch]);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
        setIsColorPickerOpen(false);
    }

    function handleColorSelect(color) {
        dispatch(setBackgroundColor(color));
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