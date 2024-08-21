import { useEffect, useState } from "react";
import { BoardList } from "../cmps/BoardList.jsx";
import { useSelector } from "react-redux";
import { loadBoards } from '../store/actions/board.actions.js'
import { LuClock4, LuStar, LuUsers } from "react-icons/lu";
import { UppderMenu } from "../cmps/UppderMenu.jsx";

export function BoardIndex() {
    const boards = useSelector(storeState => storeState.boardModule.boards)

    useEffect(() => {
        loadBoards();
    }, []);


    return <section className="main-boards-container">
        <UppderMenu />
        <div className="board-list-container">
            <div className="starred-boards">
                <div className="starred-tittle">
                    <LuStar />
                    <h3>Starred boards</h3>
                </div>
                <BoardList boards={boards} />
            </div>
            <div className="user-boards">
                <div className="starred-tittle">
                    <LuClock4 /><h3>Your workspaces</h3>
                </div>
                <ul className="user-boards-list">
                    <li className="board-item">
                        <div className="board-name">workSpace 1</div>
                    </li>
                    <li className="board-item">
                        <div className="board-name">workSpace 2</div>
                    </li>
                    <li className="board-item">
                        <div className="board-name">workSpace 3</div>
                    </li>
                    <li className="board-item">
                        <div className="board-name">workSpace 4</div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
}