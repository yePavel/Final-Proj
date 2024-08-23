import GroupMenuIcon from '../assets/imgs/group-menu-icon.svg';
import { LuCopy } from "react-icons/lu";
import { TbSticker } from "react-icons/tb";
import { RiEyeLine } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import { RxActivityLog } from "react-icons/rx";
import { IoMdExit } from "react-icons/io";

import { useState } from "react";

export function MenuHeader({ onChangeBaceground }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
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
                    <li><button>About this board</button></li>
                    <li><button> <RxActivityLog /> Activity</button></li>
                    <li><button>Archived items</button></li>
                    <li className='end-section'><button> <TbSettings /> Settings</button></li>
                    <li><button onClick={onChangeBaceground}>Change background</button></li>
                    <li><button>Custom Fields</button></li>
                    <li><button>Automation</button></li>
                    <li><button>Labels</button></li>
                    <li className='end-section'><button> <TbSticker /> Stickers</button></li>
                    <li><button> <RiEyeLine /> Watch</button></li>
                    <li><button>Collapse all lists</button></li>
                    <li><button> <LuCopy /> Copy board</button></li>
                    <li><button>Email-to-board</button></li>
                    <li><button>Print, export, and share</button></li>
                    <li><button> <IoMdExit /> Leave board</button></li>
                </ul>
            </div>
        </section>
    );
}