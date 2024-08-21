import { RiBriefcase5Line, RiGalleryView2, RiTrelloFill } from "react-icons/ri";
import { TbTemplate } from "react-icons/tb";
import { GiLightningFrequency } from "react-icons/gi";
import { MdOutlineCollections } from "react-icons/md";
import { IoIosArrowUp, IoMdHeartEmpty } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuClock4, LuUsers } from "react-icons/lu";

export function UppderMenu() {
    return <nav className="boards-manu">
        <div className="upper-manu">
            <ul>
                <li className="active"><RiTrelloFill />Boards</li>
                <li><TbTemplate />Templates</li>
                <li><GiLightningFrequency />Home</li>
            </ul>
        </div>
        <div className="lower-manu">
            <div className="workspace-title">WorkSpaces</div>
            <div className="Planit-workspace-title">
                <div className="letter-p">P</div>PlanIt Workspace<IoIosArrowUp />
            </div>
            <ul>
                <li><RiBriefcase5Line />Gatting started</li>
                <li><RiTrelloFill />Boards</li>
                <li><MdOutlineCollections />Collections</li>
                <li><IoMdHeartEmpty />Highlights</li>
                <li><RiGalleryView2 />Views</li>
                <li><LuUsers />Members</li>
                <li><IoSettingsOutline />Settings</li>
                <li><RiBriefcase5Line />Billing</li>
            </ul>
        </div>
    </nav>
}