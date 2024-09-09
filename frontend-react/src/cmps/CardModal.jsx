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
                <div className="card-header">
                    <div className="card-title">
                        <HiOutlineCreditCard />
                        <span>{task.title}</span>
                        <button onClick={onClose} className="close-modal">
                            <img src={CloseBtn} alt="close-btn Icon" />
                        </button>
                    </div>
                    <div className="card-group-info">in list: <span>{`${group.title}`}</span>  <IoEyeOutline /></div>
                </div>
                <CardMainCol />
                <CardSideBar group={group} />
            </div>
        </section>
    );
}
