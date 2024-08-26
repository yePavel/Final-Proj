import { useEffect, useState } from "react";
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
import { useClick, useFloating, useInteractions } from "@floating-ui/react";


export function CardSideBar() {
    const task = useSelector(storeState => storeState.taskModule.task)
    const [isOpen, setIsOpen] = useState(false);


    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
    });

    const click = useClick(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
    ]);

    function handlePopup(type) {
        const { target: el } = type
        const tooltip = document.getElementsByClassName("popup-menu")[0];
        handlePosition(el, tooltip)
    }


    return (
        <>
            <section className="card-sidebar">
                <h3>Add to card</h3>
                <div ref={refs.setReference} {...getReferenceProps()}>
                    <div className="sidebar-item"><LuUser2 /> Members</div>
                    <div className="sidebar-item"><BiLabel /> Labels</div>
                    <div className="sidebar-item"><GoChecklist /> Checklist</div>

                </div>
                {isOpen && (
                    <div
                        ref={refs.setFloating}
                        style={floatingStyles}
                        {...getFloatingProps()}
                    >
                        Floating element
                    </div>
                )}
            </section>
        </>
    );

    return <section className="card-sidebar">
        <h3>Add to card</h3>
        <div className="sidebar-item" onClick={handleMembers}><LuUser2 /> Members</div>
        <div className="sidebar-item"><BiLabel /> Labels</div>
        <div className="sidebar-item"><GoChecklist /> Checklist</div>
        {/* <div className="sidebar-item"><FiClock /> Dates</div> */}
        {/* <div className="sidebar-item"><GrAttachment /> Attachments</div> */}
        {/* <div className="sidebar-item"><IoLocationSharp /> Location</div> */}
        {/* <div className="sidebar-item"><FaPager /> Cover</div> */}
        {/* <div className="sidebar-item"><TbBoxAlignBottom /> Custom Fields</div> */}
    </section>
}