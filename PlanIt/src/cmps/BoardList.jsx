import React, { useEffect, useState } from 'react';
import { boardService } from '../services/board/board.service.local.js';
import { AddGroup } from './AddGroup.jsx';
import { BoardPreview } from './BoardPreview.jsx';

export function BoardList() {
    const [boards, setBoards] = useState([]);
    const [isAddingTask, setIsAddingTask] = useState(null);
    const [isAddingGroup, setIsAddingGroup] = useState(null);

    async function loadBoards() {
        try {
            const data = JSON.parse(localStorage.getItem('boards')) || await boardService.query();
            setBoards(data);
        } catch (error) {
            console.error("Error loading boards", error);
        }
    }

    useEffect(() => {
        loadBoards();
    }, []);

    return (
        <section className="board-list">
            {boards.map((board) => (
                <React.Fragment key={board.id}>
                    <BoardPreview
                        board={board}
                        isAddingTask={isAddingTask}
                        setIsAddingTask={setIsAddingTask}
                        boards={boards}
                        setBoards={setBoards}/>
                    <div className="add-group">
                        {isAddingGroup === board.id ? (
                            <AddGroup
                                boardId={board.id}
                                boards={boards}
                                setBoards={setBoards}
                                onCancel={() => setIsAddingGroup(null)}/>
                        ) : (
                            <button
                                onClick={() => setIsAddingGroup(board.id)}
                                className="add-group-btn">
                                + Add another list
                            </button>
                        )}
                    </div>
                </React.Fragment>
            ))}
        </section>
    );
}