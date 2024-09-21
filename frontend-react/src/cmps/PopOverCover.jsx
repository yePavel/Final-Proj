import { useSelector } from "react-redux";
import { updateTaskCover } from "../store/actions/board.actions";
import { useState } from "react";


export function PopOverCover({ group }) {
    const board = useSelector(storeState => storeState.boardModule.board)
    const task = useSelector(storeState => storeState.boardModule.task)

    const colors = [
        '#4EC19F',  // green
        '#F5D26D',  // yellow
        '#FAA874',  // orange
        '#F27B76',  // red
        '#B1A4F9',  // purple
        '#4A89F9',  // blue
        '#66C4DD',  // light blue
        '#9AD16D',  // greenish-yellow
        '#EC7FB5',  // pink
        '#7D8796'   // grey
    ];
    const imgs = [
        'https://res.cloudinary.com/dzsweus7f/image/upload/v1726913807/rma3fusj4evq9h2lmx09.jpg',
        'https://res.cloudinary.com/dzsweus7f/image/upload/v1726913953/yszp4jz7uprkqfeil3ts.jpg',
        'https://res.cloudinary.com/dzsweus7f/image/upload/v1726915175/ajtaufq5t61bfpwvoekb.jpg',
        'https://res.cloudinary.com/dzsweus7f/image/upload/v1726915199/g9oxksv20rwanuqe0z2l.jpg',
        'https://res.cloudinary.com/dzsweus7f/image/upload/v1726915215/lamt3oi7nbingpekor6z.jpg',
        'https://res.cloudinary.com/dzsweus7f/image/upload/v1726915231/v1romawnxpcklauz3dxb.jpg',
        'https://res.cloudinary.com/dzsweus7f/image/upload/v1726915242/g9sdjr4pubjimghe58yj.jpg',
        'https://res.cloudinary.com/dzsweus7f/image/upload/v1726915256/ns23khea2qjjgp3rkg8i.jpg'
    ];

    function setCover(val) {
        const type = val.length === 7 ? 'color' : 'img'
        console.log('type:', type)
        if (type === 'color') {
            const updatedTask = { ...task, coverColor: val, coverImg: null }
            updateTaskCover(board._id, group.id, updatedTask)
        } else {
            const updatedTask = { ...task, coverImg: val, coverColor: null }
            updateTaskCover(board._id, group.id, updatedTask)
        }
    }

    function removeCover(clr) {
        const updatedTask = { ...task, coverColor: clr }
        updateTaskCover(board._id, group.id, updatedTask)
    }


    return <>
        <div className="pop-header">
            <h3>Cover</h3>
            {task.coverColor && <button className="remove-cover-btn" onClick={() => removeCover('')}>Remove cover</button>}
        </div>
        <div className="pop-content-container">
            <h4>Colors</h4>
            <div className="task-cover-colors">
                {colors.map(color =>
                    <button
                        key={color}
                        className="dropmenu-colored-btn"
                        onClick={() => setCover(color)}
                        style={{ background: `${color}` }}
                    >
                    </button>
                )
                }
            </div>
        </div>
        <div className="task-cover-photos">
            <h4>Photos from Unsplash</h4>
            {imgs.map(img =>
                <div className='cover-img' onClick={() => setCover(img)}>
                    <img src={`${img}`} alt="" />
                </div>
            )}
        </div>
    </>
}