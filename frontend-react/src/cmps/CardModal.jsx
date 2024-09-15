import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { CardMainCol } from "./CardMainCol";
import { CardSideBar } from "./CardSideBar";
import { useSelector } from "react-redux";

import CloseBtn from '../assets/imgs/close-btn.svg'
import { HiOutlineCreditCard } from "react-icons/hi";

export function CardModal({ group, onClose }) {
    const task = useSelector(storeState => storeState.boardModule.task)


    return (
        <section className="click-screen" onClick={onClose} >
            <div className="card-details-modal" onClick={(e) => e.stopPropagation()}>
                {task.coverColor?.length > 3 ? <div className="task-cover" style={{ background: `${task.coverColor}` }}></div> :
                    <img className="top-cover-img" src={`./../src/assets/imgs/task_imgs/${task.coverImg}.jpg`} alt="" />
                }
                <div className="card-header">
                    <div className="card-title">
                        <HiOutlineCreditCard />
                        <span>{task.title}</span>
                        <button onClick={onClose} className="close-modal">
                            <img src={CloseBtn} alt="close-btn Icon" />
                        </button>
                    </div>
                    <div className="card-group-info">
                        in list:
                        <span> {`${group.title}`}</span>
                        {task.isWatching && <IoEyeOutline />}
                    </div>
                </div>
                <CardMainCol group={group} />
                <CardSideBar group={group} />
            </div>
        </section>
    );
}
