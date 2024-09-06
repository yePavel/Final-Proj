import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AssignedMember } from "./AssignedMember";
import { GroupMenu } from "./GroupMenu";
import { LabelPreview } from "./LabelPreview";
import { AddTask } from "./AddTask";
import { GoPlus } from "react-icons/go";
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
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
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
            handleBoardUpdate(board)
        } else {
            const result = move(state[sInd], state[dInd], source, destination);
            const newState = [...state];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];
        }
    }

    return (
        <div className="board-card">
            <ol className="board-container">
                <div className="board-golders">

                    <DragDropContext onDragEnd={onDragEnd} >
                        {state.map((el, ind) => (
                            < Droppable key={ind} droppableId={`${ind}`}>
                                {(provided, snapshot) => (
                                    <MainGroupCard provided={provided} el={el} />
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