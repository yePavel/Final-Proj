import { useEffect, useState } from "react";
import { BiLabel } from "react-icons/bi";
import { GoChecklist } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { useClick, useFloating, useInteractions, computePosition, autoUpdate } from "@floating-ui/react";
import { MainPopOver } from "./MainPopOver.jsx";
import { IoMdTime } from "react-icons/io";

export function CardSideBar({ group }) {
    const [isOpen, setIsOpen] = useState(false);
    const [chosenBtn, setChosenBtn] = useState(null)

    const referenceEl = document.querySelector(`#${chosenBtn}`);
    const floatingEl = document.querySelector('#popover');

    if (referenceEl && floatingEl) {
        computePosition(referenceEl, floatingEl, { placement: 'bottom-start', }).then(({ x, y }) => {
            Object.assign(floatingEl.style, {
                left: `${x}px`,
                top: `${y}px`,
            });
        });
    }

    function handlePopOver(type) {
        setChosenBtn(prevRes => prevRes = type)
    }

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
    });

    const click = useClick(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
    ]);

    return (
        <>
            <section className="card-sidebar">
                <h3>Add to card</h3>
                <div ref={refs.setReference} {...getReferenceProps()}>

                    <button id="members" className="sidebar-item" onClick={() => handlePopOver('members')}>
                        <LuUser2 /> Members
                    </button>
                    <button id="labels" className="sidebar-item" onClick={() => handlePopOver('labels')}>
                        <BiLabel /> Labels
                    </button>
                    <button id="checklist" className="sidebar-item" onClick={() => handlePopOver('checklist')}>
                        <GoChecklist /> Checklist
                    </button>
                    <button id="dates" className="sidebar-item" onClick={() => handlePopOver('dates')}>
                        <IoMdTime /> Dates
                    </button>

                </div>
                {isOpen && (
                    <div
                        ref={refs.setFloating}
                        style={floatingStyles}
                        {...getFloatingProps()}
                    >
                        <MainPopOver chosenCmp={chosenBtn} group={group} />
                    </div>
                )}
            </section>
        </>
    );
}