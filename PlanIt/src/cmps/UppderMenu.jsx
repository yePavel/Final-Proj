import { RiBriefcase5Line, RiGalleryView2, RiTrelloFill } from "react-icons/ri";
import { TbTemplate } from "react-icons/tb";
import { GiLightningFrequency } from "react-icons/gi";
import { MdOutlineCollections } from "react-icons/md";
import { IoIosArrowUp, IoMdHeartEmpty } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

export function UppderMenu() {
    return <nav className="boards-manu">
        <div className="upper-manu">
            <ul>
                <li className="active"><RiTrelloFill /><a href="">Boards</a></li>
                <li><TbTemplate /><a href="">Templates</a></li>
                <li><GiLightningFrequency /><a href="">Home</a></li>
            </ul>
        </div>
        <div className="lower-manu">
            <div className="workspace-title">WorkSpaces</div>
            <div className="Planit-workspace-title">
                <div className="letter-p">P</div>PlanIt Workspace<IoIosArrowUp />
            </div>
            <ul>
                <li><RiBriefcase5Line /><a href="">Gatting started</a></li>
                <li><RiTrelloFill /><a href="">Boards</a></li>
                <li><MdOutlineCollections /><a href="">Collections</a></li>
                <li><IoMdHeartEmpty /><a href="">Highlights</a></li>
                <li><RiGalleryView2 /><a href="">Views</a></li>
                <li><LuUsers /><a href="">Members</a></li>
                <li><IoSettingsOutline /><a href="">Settings</a></li>
                <li><RiBriefcase5Line /><a href="">Billing</a></li>
            </ul>
        </div>
    </nav>
}