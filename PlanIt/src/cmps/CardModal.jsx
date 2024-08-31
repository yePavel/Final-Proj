import React, { useEffect, useState } from "react";
import { PiSubtitlesBold } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { CardMainCol } from "./CardMainCol";
import { CardSideBar } from "./CardSideBar";
import { useSelector } from "react-redux";

import CloseBtn from '../assets/imgs/close-btn.svg'

export function CardModal({ group, onClose }) {
    const currTask = useSelector(storeState => storeState.boardModule.task)

    return (
        <section className="click-screen" onClick={onClose} >
            <div className="card-details-modal" onClick={(e) => e.stopPropagation()}>
                <div className="card-header">
                    <div className="card-title">
                        <button onClick={onClose} className="close-modal">
                        <img src={CloseBtn} alt="close-btn Icon" />
                        </button>
                        <PiSubtitlesBold />
                        <span>{currTask.title}</span>
                    </div>
                    <div className="card-group-info">in list: <span>{`${group.title}`}</span>  <IoEyeOutline /></div>
                </div>
                <CardMainCol />
                <CardSideBar group={group} />
            </div>
        </section>
    );
}
