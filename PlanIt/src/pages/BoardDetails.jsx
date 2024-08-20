import React, { useEffect, useState } from 'react';
import { AddGroup } from '../cmps/AddGroup.jsx';
import { BoardPreview } from '../cmps/BoardPreview.jsx';
import { loadBoard, updateBoard } from '../store/actions/board.actions.js';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function BoardDetails() {
    const { boardId } = useParams()
    const board = useSelector(storeState => storeState.boardModule.board)

    const [isAddingGroup, setIsAddingGroup] = useState(null);

    useEffect(() => {
        loadBoard(boardId)
    }, [boardId])


    function handleAddTask(board) {
        updateBoard(board)
    }

    if (!board) return <div>Loading...</div>

    return (
        <section className="board-list">
            <BoardPreview
                board={board}
                handleAddTask={handleAddTask} />
            <div className="add-group">
                {isAddingGroup === board.id ? (
                    <AddGroup
                        boardId={board.id}
                        setBoards={setBoards}
                        onCancel={() => setIsAddingGroup(null)} />
                ) : (
                    <button
                        onClick={() => setIsAddingGroup(board.id)}
                        className="add-group-btn">
                        + Add another list
                    </button>
                )}
            </div>
        </section>
    );
}