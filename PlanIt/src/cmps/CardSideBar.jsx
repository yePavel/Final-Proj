import { BiLabel } from "react-icons/bi";
import { FaPager } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { GoChecklist } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { TbBoxAlignBottom } from "react-icons/tb";


export function CardSideBar() {

    return <section className="card-sidebar">
        <h3>Add to card</h3>
        <div className="sidebar-item"><LuUser2 /> Labels</div>
        <div className="sidebar-item"><BiLabel /> Checklist</div>
        <div className="sidebar-item"><GoChecklist /> Dates</div>
        <div className="sidebar-item"><FiClock /> Attachment</div>
        <div className="sidebar-item"><IoLocationSharp /> Location</div>
        <div className="sidebar-item"><FaPager /> Cover</div>
        <div className="sidebar-item"><TbBoxAlignBottom /> Custom Fields</div>
    </section>
}