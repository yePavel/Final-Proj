import React, { useEffect, useState } from "react";
import { PiSubtitlesBold } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { CardMainCol } from "./CardMainCol";
import { CardSideBar } from "./CardSideBar";
import { useSelector } from "react-redux";

export function CardModal({ groupName, onClose }) {
    const currTask = useSelector(storeState => storeState.taskModule.task)

    return (
        <section className="click-screen" onClick={onClose} >
            <div className="card-details-modal" onClick={(e) => e.stopPropagation()}>
                <div className="card-header">
                    <div className="card-title">
                        <PiSubtitlesBold />
                        <span>{currTask.title}</span>
                    </div>
                    <div className="card-group-info">in list: <span>{`${groupName}`}</span>  <IoEyeOutline /></div>
                </div>
                <CardMainCol />
                <CardSideBar />
            </div>
        </section>
    );
}
