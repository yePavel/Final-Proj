import React, { useEffect, useState } from "react";
import { getTaskById } from "../services/board/task.service.js";
import { PiSubtitlesBold } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { ImParagraphLeft } from "react-icons/im";
import { LuList } from "react-icons/lu";

export function TaskCardModal({ task, onClose }) {

    if (!task) return null;

    return (
        <section className="click-screen" onClick={onClose}>
            <div className="card-details-modal" onClick={onClose}>
                <div className="card-header">
                    <div className="card-title">
                        <PiSubtitlesBold />
                        <span>{task.title}</span>
                    </div>
                    <div className="card-group-info">in list: To Do  <IoEyeOutline /></div>
                </div>
                <div className="card-main-col">

                    <div className="card-detail-data">
                        <div className="card-detail-item">
                            <h3>Members</h3>
                            <div>
                                <button className="member">PY</button>
                                <button className="member">+</button>
                            </div>
                        </div>
                        <div className="card-detail-item">
                            <h3>Notifications</h3>
                            <div>
                                <a href="">Notifications</a>
                            </div>
                        </div>
                    </div>

                    <div className="card-description">
                        <ImParagraphLeft />
                        <h3>Description</h3>
                        <div className="card-desc-info">Add a more details description...</div>
                    </div>

                    <div>
                        <LuList />
                    </div>
                </div>
            </div>
        </section>
    );
}
