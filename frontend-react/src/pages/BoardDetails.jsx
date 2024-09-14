import { useEffect } from 'react';
import { getCmdUpdateBoard, loadBoard, updateBoard } from '../store/actions/board.actions.js';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BoardHeader } from '../cmps/BoardHeader.jsx';
import { DragAndDrop } from '../cmps/DragAndDrop.jsx';
import { SOCKET_EMIT_SET_BOARD, SOCKET_EVENT_BOARD_UPDATED, socketService } from '../services/socket.service.js';
import { useDispatch } from 'react-redux';

export function BoardDetails() {
    const { boardId } = useParams();
    const board = useSelector(storeState => storeState.boardModule.board);
    const dispatch = useDispatch()
    useEffect(() => {
        loadBoard(boardId)
        setSocketBoard(boardId)

        socketService.on(SOCKET_EVENT_BOARD_UPDATED, updatedBoard => {
            dispatch(getCmdUpdateBoard(updatedBoard))
        })

        return () => {
            socketService.off(SOCKET_EVENT_BOARD_UPDATED)
        }

    }, [boardId])

    function setSocketBoard(boardId) {
        socketService.emit(SOCKET_EMIT_SET_BOARD, boardId)
    }

    function handleBoardUpdate(updatedBoard) {
        updateBoard(updatedBoard)
    }

    if (!board) return <div>Loading...</div>;

    return (
        <section
            className="board-list"
            style={{ background: `linear-gradient(to bottom right, ${board?.style.background.first}, ${board?.style.background.second})` }}>
            <BoardHeader board={board} />
            <DragAndDrop handleBoardUpdate={handleBoardUpdate} />
        </section>
    );
}