import { useEffect } from "react";
import { BiLabel } from "react-icons/bi";
import { FaPager } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { GoChecklist } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { TbBoxAlignBottom } from "react-icons/tb";
import { loadTask } from "../store/actions/task.actions";
import { useSelector } from "react-redux";


export function CardSideBar() {
    const task = useSelector(storeState => storeState.taskModule.task)

    return <section className="card-sidebar">
        <h3>Add to card</h3>
        <div className="sidebar-item"><LuUser2 /> Members</div>
        <div className="sidebar-item"><BiLabel /> Labels</div>
        <div className="sidebar-item"><GoChecklist /> Checklist</div>
        {/* <div className="sidebar-item"><FiClock /> Dates</div> */}
        {/* <div className="sidebar-item"><GrAttachment /> Attachments</div> */}
        {/* <div className="sidebar-item"><IoLocationSharp /> Location</div> */}
        {/* <div className="sidebar-item"><FaPager /> Cover</div> */}
        {/* <div className="sidebar-item"><TbBoxAlignBottom /> Custom Fields</div> */}
    </section>
}