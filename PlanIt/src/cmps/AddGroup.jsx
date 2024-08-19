import { useState } from "react";
import { boardService } from "../services/board/board.service.local.js";

export function AddGroup({ boardId, boards, setBoards, onCancel }) {
    const [groupTitle, setGroupTitle] = useState("");

    async function addGroup() {
        {
            const updatedBoards = boards.map((board) => {
                if (board.id === boardId) {
                    const newGroup = {
                        id: Date.now(),
                        title: groupTitle,
                        tasks: [],
                    };
                    return {
                        ...board,
                        groups: [...board.groups, newGroup],
                    };
                }
                return board;
            });

            setBoards(updatedBoards);

            localStorage.setItem('boards', JSON.stringify(updatedBoards));

            await boardService.save(updatedBoards);

            onCancel();
        };
    }

    return (
        <section className="add-group-form">
            <input
                type="text"
                value={groupTitle}
                onChange={(e) => setGroupTitle(e.target.value)}
                placeholder="Enter list title"
            />
            <button onClick={addGroup}>Add List</button>
            <button onClick={onCancel}>X</button>
        </section>
    );
}