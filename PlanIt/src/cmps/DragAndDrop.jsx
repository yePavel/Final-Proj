import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AssignedMember } from "./AssignedMember";
import { GroupMenu } from "./GroupMenu";
import { LabelPreview } from "./LabelPreview";
import { AddTask } from "./AddTask";
import { GoPlus } from "react-icons/go";
import { useSelector } from "react-redux";
import { AddGroup } from "./AddGroup";

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
    const [isAddingTask, setIsAddingTask] = useState(null);
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
            // console.log('board.groups[]:', board.groups[sInd])
            handleBoardUpdate(board)
            // setState(newState);

        } else {
            const result = move(state[sInd], state[dInd], source, destination);
            const newState = [...state];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];

            // setState(newState.filter(group => group.length));
        }
    }

    return (
        <div className="board-card">
            <ol style={{ display: "flex" }} className="board-container">
                <div className="board-golders">
                    <DragDropContext onDragEnd={onDragEnd} >
                        {state.map((el, ind) => (
                            < Droppable key={ind} droppableId={`${ind}`}>
                                {(provided, snapshot) => (
                                    < div
                                        ref={provided.innerRef}
                                        className="group-card"

                                    >
                                        <div className="group-header">
                                            <h3 className="group-title">{el.title}</h3>
                                            <GroupMenu />
                                        </div>

                                        <div className="tasks">
                                            {el.tasks.map((item, index) => (
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div className="task"
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}


                                                        >
                                                            <LabelPreview labels={item.labels} />
                                                            <p className="task-title">{item.title}</p>
                                                            <AssignedMember members={item.members} />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                        <div className="add-task">
                                            {isAddingTask === el.id ? (
                                                <AddTask
                                                    groupId={el.id}
                                                    onCancel={() => setIsAddingTask(null)}
                                                    handleBoardUpdate={handleBoardUpdate}
                                                />
                                            ) : (
                                                <button
                                                    onClick={() => setIsAddingTask(el.id)}
                                                    className="add-a-card-btn"
                                                >
                                                    <GoPlus className="plus-icon" />Add a card
                                                </button>
                                            )}
                                        </div>
                                    </div>
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