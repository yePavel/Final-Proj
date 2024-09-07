import { useEffect } from 'react';
import { loadBoard, updateBoard } from '../store/actions/board.actions.js';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BoardHeader } from '../cmps/BoardHeader.jsx';
import { DragAndDrop } from '../cmps/DragAndDrop.jsx';

export function BoardDetails() {
    const { boardId } = useParams();
    const board = useSelector(storeState => storeState.boardModule.board);

    useEffect(() => {
        loadBoard(boardId)
    }, [boardId])

    function handleBoardUpdate(updatedBoard) {
        updateBoard(updatedBoard)
    }

    if (!board) return <div>Loading...</div>;
    console.log('board:', board)

    return (
        <section
            className="board-list"
            style={{ background: `linear-gradient(to bottom right, ${board?.style.background.first}, ${board?.style.background.second})` }}>
            {/* <div className='side-board-menu'></div> */}
            <BoardHeader board={board} />
            <DragAndDrop handleBoardUpdate={handleBoardUpdate} />
        </section>
    );
}