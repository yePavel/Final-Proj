import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import GroupMenuIcon from '../assets/imgs/group-menu-icon.svg';

import { useState } from "react";

export function GroupMenu({ onDeleteGroup }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

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
                    <button onClick={onDeleteGroup}>Delete Group</button>
                </div>
            }
        </section>
    )
}