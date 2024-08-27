import { useEffect, useState } from "react";
import { BiLabel } from "react-icons/bi";
import { GoChecklist } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useClick, useFloating, useInteractions, computePosition, autoUpdate } from "@floating-ui/react";
import { PopOver } from "./PopOver.jsx";


export function CardSideBar() {
    const task = useSelector(storeState => storeState.taskModule.task)
    const [isOpen, setIsOpen] = useState(false);
    const [chosenBtn, setChosenBtn] = useState(null)

    function handlePopOver(type) {
        setChosenBtn(prevRes => prevRes = type)
    }


    const button = document.querySelector(`#${chosenBtn}`);
    const tooltip = document.querySelector('#popover');
    computePosition(button, tooltip).then(({ x, y }) => {
        Object.assign(tooltip.style, {
            left: `${x}px`,
            top: `${y}px`,
        });
    });


    // const cleanup = autoUpdate(referenceEl, floatingEl, () => {
    //     computePosition(referenceEl, floatingEl).then(({ x, y }) => {
    //         // ...
    //     });
    // });

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

                </div>
                {isOpen && (
                    <div
                        ref={refs.setFloating}
                        style={floatingStyles}
                        {...getFloatingProps()}
                    >
                        <PopOver />
                    </div>
                )}
            </section>

        </>
    );
}