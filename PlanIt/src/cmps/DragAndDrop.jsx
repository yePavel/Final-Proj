import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AssignedMember } from "./AssignedMember";
import { GroupMenu } from "./GroupMenu";
import { LabelPreview } from "./LabelPreview";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
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


export function DragAndDrop({ groups }) {
    // const [state, setState] = useState([getItems(10), getItems(5, 10)]);
    const [state, setState] = useState(groups);


    function onDragEnd(result) {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(state[sInd], source.index, destination.index);
            const newState = [...state];
            newState[sInd] = items;
            setState(newState);
        } else {
            const result = move(state[sInd], state[dInd], source, destination);
            const newState = [...state];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];

            setState(newState.filter(group => group.length));
        }
    }
    console.log('state:', state)
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
                                    // style={getListStyle(snapshot.isDraggingOver)}
                                    // {...provided.droppableProps}
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

                                                    // style={getItemStyle(
                                                    //     snapshot.isDragging,
                                                    //     provided.draggableProps.style
                                                    // )}
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

                                    </div>

                                )}
                            </Droppable>
                        ))}
                    </DragDropContext>
                </div>
            </ol >
        </div >
    );
}