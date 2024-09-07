import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import GroupMenuIcon from '../assets/imgs/group-menu-icon.svg';

import { useState } from "react";
import { ColorPicker } from './ColorPicker';
import { GroupMenuDropDown } from './GroupMenuDropDown';

export function GroupMenu({ onDeleteGroup, group }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <section className="group-menu">
            <button className="menu-btn" onClick={toggleMenu}>
                <HiOutlineDotsHorizontal />
            </button>
            {isMenuOpen &&
                <div className="menu-dropdown">
                    <div className='menu-dropdown-header'>
                        <h3>List actions</h3>
                    </div>
                    <button onClick={onDeleteGroup}>Delete Group</button>
                    <button onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}>Group Color</button>
                    {isColorPickerOpen && <GroupMenuDropDown group={group} />}
                </div>
            }
        </section>
    )
}