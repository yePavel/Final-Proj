import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { AddGroup } from "./AddGroup";
import { MainGroupCard } from "./MainGroupCard";

const reorder = (list, startIndex, endIndex) => {
    const { tasks } = list
    const result = Array.from(tasks);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};


const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source.tasks);
    const destClone = Array.from(destination.tasks);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

export function DragAndDrop({ handleBoardUpdate }) {
    const board = useSelector(storeState => storeState.boardModule.board)
    const [isAddingGroup, setIsAddingGroup] = useState(null);
    const { groups: state } = board

    function onDragEnd(result) {
        const { source, destination } = result;

        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(state[sInd], source.index, destination.index);
            const newState = [...state];
            newState[sInd].tasks = items;
            const updatedBoard = { ...board, groups: newState };
            handleBoardUpdate(updatedBoard);
        } else {
            const result = move(state[sInd], state[dInd], source, destination);
            const newState = [...state];
            newState[sInd].tasks = result[sInd];
            newState[dInd].tasks = result[dInd];
            const updatedBoard = { ...board, groups: newState };
            handleBoardUpdate(updatedBoard);
        }
    }

    return (
        <div className="board-card">
            <ol className="board-container">
                <div className="board-golders">

                    <DragDropContext onDragEnd={onDragEnd} >
                        {state.map((el, ind) => (
                            <Droppable key={ind} droppableId={`${ind}`}>
                                {(provided, snapshot) => (
                                    <MainGroupCard provided={provided} snapshot={snapshot} el={el} />
                                )}
                            </Droppable>
                        ))}
                    </DragDropContext>

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

                </div>
            </ol >
        </div >
    );
}