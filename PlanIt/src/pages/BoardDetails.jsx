import { useEffect, useState } from 'react';
import { AddGroup } from '../cmps/AddGroup.jsx';
import { loadBoard, updateBoard } from '../store/actions/board.actions.js';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BoardGroup } from '../cmps/BoardGroup.jsx';
import { BoardHeader } from '../cmps/BoardHeader.jsx';

export function BoardDetails() {
    const { boardId } = useParams()
    const board = useSelector(storeState => storeState.boardModule.board)

    const [isAddingGroup, setIsAddingGroup] = useState(null);

    useEffect(() => {
        loadBoard(boardId)
    }, [boardId])

    function handleBoardUpdate(board) {
        updateBoard(board)
    }

    if (!board) return <div>Loading...</div>

    return (
        <section className="board-list">
            <BoardHeader board={board} />
            <div className="board-card">
                <BoardGroup handleBoardUpdate={handleBoardUpdate} groups={board.groups} />
            </div>
            <div className="add-group">
                {isAddingGroup === board.id ? (
                    <AddGroup
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