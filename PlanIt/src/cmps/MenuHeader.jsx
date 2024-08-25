import GroupMenuIcon from '../assets/imgs/group-menu-icon.svg';
import { LuCopy } from "react-icons/lu";
import { TbSticker } from "react-icons/tb";
import { RiEyeLine } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import { RxActivityLog } from "react-icons/rx";
import { IoMdExit } from "react-icons/io";
import { PiWarningCircleBold } from "react-icons/pi";
import { MdMailOutline } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { TiArchive } from "react-icons/ti";
import { BsArrowsCollapseVertical } from "react-icons/bs";
import { useState } from "react";
import { ColorPicker } from './ColorPicker';

import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../store/actions/board.actions';

export function MenuHeader() {
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

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
                    <li><button> <RxActivityLog /> Activity</button></li>
                    <li className='end-section'><button> <TiArchive /> Archived items</button></li>
                    <li><button> <TbSettings /> Settings</button></li>
                    <li>
                        <button onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}>
                            Change background
                        </button>
                        {isColorPickerOpen && <ColorPicker onColorSelect={handleColorSelect} />}
                    </li>
                    <li><button>Custom Fields</button></li>
                    <li><button>Automation</button></li>
                    <li><button>Labels</button></li>
                    <li className='end-section'><button> <TbSticker /> Stickers</button></li>
                    <li><button> <RiEyeLine /> Watch</button></li>
                    <li><button> <BsArrowsCollapseVertical /> Collapse all lists</button></li>
                    <li><button> <LuCopy /> Copy board</button></li>
                    <li><button> <MdMailOutline /> Email-to-board</button></li>
                    <li><button> <CiShare2 /> Print, export, and share</button></li>
                    <li><button> <IoMdExit /> Leave board</button></li>
                </ul>
            </div>
        </section>
    );
}