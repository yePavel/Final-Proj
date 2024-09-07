import { useEffect, useState } from "react";
import { BoardList } from "../cmps/BoardList.jsx";
import { useSelector } from "react-redux";
import { loadBoards, loadStarredBoards } from '../store/actions/board.actions.js'
import { LuClock4, LuStar } from "react-icons/lu";
import { UppderMenu } from "../cmps/UppderMenu.jsx";
import { StarredBoardList } from "../cmps/StarredBoardList.jsx";

export function BoardIndex() {
    const boards = useSelector(storeState => storeState.boardModule.boards)
    const starredBoards = useSelector(storeState => storeState.boardModule.starredBoards)

    useEffect(() => {
        loadBoards()
        loadStarredBoards()
    }, []);


    return <section className="main-boards-container">
        <UppderMenu />
        <div className="board-list-container">

            <div className="starred-boards">
                <div className="workspace-title">
                    <LuStar />
                    <h3>Starred boards</h3>
                </div>
                <StarredBoardList boards={starredBoards} />
            </div>

            <div className="user-boards">
                <div className="workspace-title">
                    <LuClock4 /><h3>Your workspaces</h3>
                </div>
                <BoardList boards={boards} />
            </div>
        </div>
    </section>
}