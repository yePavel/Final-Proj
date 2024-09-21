import { boardService } from '../../services/board'
import { store } from '../store'
import { ADD_BOARD, REMOVE_BOARD, SET_BOARDS, SET_BOARD, UPDATE_BOARD, ADD_BOARD_MSG, SET_STARRED, ADD_STARRED_BOARD, REMOVE_STARRED_BOARD, SET_BACKGROUND_COLOR, SET_TASK, UPDATE_TASK_MEMBERS } from '../reducers/board.reducer'

import { ADD_LABEL, UPDATE_LABEL } from '../reducers/board.reducer';
import { taskService } from '../../services/task';

export async function loadBoards(filterBy = { title: '' }) {
    try {
        const boards = await boardService.query(filterBy)
        store.dispatch(getCmdSetBoards(boards))
    } catch (err) {
        console.log('Cannot load boards', err)
        throw err
    }
}

export async function loadBoard(boardId) {
    try {
        const board = await boardService.getById(boardId)
        store.dispatch(getCmdSetBoard(board))
    } catch (err) {
        console.log('Cannot load board', err)
        throw err
    }
}


export async function removeBoard(boardId) {
    try {
        await boardService.remove(boardId)
        store.dispatch(getCmdRemoveBoard(boardId))
    } catch (err) {
        console.log('Cannot remove board', err)
        throw err
    }
}

export async function addBoard(board) {
    try {
        const savedBoard = await boardService.save(board)
        store.dispatch(getCmdAddBoard(savedBoard))
        return savedBoard
    } catch (err) {
        console.log('Cannot add board', err)
        throw err
    }
}

export async function updateBoard(board) {
    try {
        const savedBoard = await boardService.save(board)
        store.dispatch(getCmdUpdateBoard(savedBoard))
        return savedBoard
    } catch (err) {
        console.log('Cannot save board', err)
        throw err
    }
}

export async function addBoardMsg(boardId, txt) {
    try {
        const msg = await boardService.addBoardMsg(boardId, txt)
        store.dispatch(getCmdAddBoardMsg(msg))
        return msg
    } catch (err) {
        console.log('Cannot add board msg', err)
        throw err
    }
}

export async function loadStarredBoards() {
    try {
        const boards = await boardService.getStarredBoards()
        store.dispatch(getCmdSetStarBoards(boards))
    } catch (err) {
        console.log('Cannot load starred boards', err)
        throw err
    }
}

export async function addStaredBoard(board) {
    try {
        const updatedBoard = await boardService.save(board)
        store.dispatch(getCmdAddStarBoards(updatedBoard))
    } catch (err) {
        console.log('Cannot add starred boards', err)
        throw err
    }
}

export async function removeStaredBoard(board) {
    try {
        const updatedBoard = await boardService.save(board)
        store.dispatch(getCmdRemoveStarBoards(updatedBoard))
    } catch (err) {
        console.log('Cannot remove starred boards', err)
        throw err
    }
}

export function setBackgroundColor(color) {
    try {
        localStorage.setItem('backgroundColor', color);
        const backgroundColor = getCmdSetBackgroundColor(color);
        return backgroundColor;
    } catch (err) {
        console.log('Cannot set background color', err);
        throw err;
    }
}

export async function loadTask(boardId, groupId, taskId) {
    try {
        const task = await taskService.query(boardId, groupId, taskId)
        store.dispatch({ type: SET_TASK, task })
    } catch (err) {
        console.log('Task: err in loadTask', err)
        throw err
    }
}

export async function updateTaskMembers(boardId, groupId, updatedTask) {
    try {
        const res = await taskService.saveTask(boardId, groupId, updatedTask)
        const { task, board } = res

        store.dispatch({ type: SET_TASK, task })
        store.dispatch(getCmdSetBoard(board))
    }
    catch (err) {
    }
}

export async function updateTaskCover(boardId, groupId, updatedTask) {
    try {
        const res = await taskService.saveTask(boardId, groupId, updatedTask)
        const { task, board } = res

        store.dispatch({ type: SET_TASK, task })
        store.dispatch(getCmdSetBoard(board))
    }
    catch (err) {
    }
}

export async function updateTaskChecklists(boardId, groupId, updatedTask) {
    try {
        const res = await taskService.saveTask(boardId, groupId, updatedTask)
        const { task, board } = res

        store.dispatch({ type: SET_TASK, task })
        store.dispatch(getCmdSetBoard(board))

    } catch (err) {
        console.error('Cannot add checklist', err);
        throw err;
    }
}
export async function updateIsWatching(boardId, groupId, updatedTask) {
    try {
        const res = await taskService.saveTask(boardId, groupId, updatedTask)
        const { task, board } = res

        store.dispatch({ type: SET_TASK, task })
        store.dispatch(getCmdSetBoard(board))

    } catch (err) {
        console.error('Cannot handle is watching', err);
        throw err;
    }
}

export async function updateTaskDates(boardId, groupId, updatedTask) {
    try {
        const res = await taskService.saveTaskDates(boardId, groupId, updatedTask);
        const { task, board } = res;

        store.dispatch({ type: SET_TASK, task });
        store.dispatch(getCmdSetBoard(board));
    } catch (err) {
        console.error('Failed to update task dates', err);
    }
}


// Command Creators:
function getCmdSetBoards(boards) {
    return {
        type: SET_BOARDS,
        boards
    }
}

function getCmdSetStarBoards(boards) {
    return {
        type: SET_STARRED,
        boards
    }
}

function getCmdAddStarBoards(board) {
    return {
        type: ADD_STARRED_BOARD,
        board
    }
}

function getCmdRemoveStarBoards(board) {
    return {
        type: REMOVE_STARRED_BOARD,
        board
    }
}

function getCmdSetBoard(board) {
    return {
        type: SET_BOARD,
        board
    }
}
function getCmdRemoveBoard(boardId) {
    return {
        type: REMOVE_BOARD,
        boardId
    }
}
function getCmdAddBoard(board) {
    return {
        type: ADD_BOARD,
        board
    }
}
export function getCmdUpdateBoard(board) {
    return {
        type: UPDATE_BOARD,
        board
    }
}
function getCmdAddBoardMsg(msg) {
    return {
        type: ADD_BOARD_MSG,
        msg
    }
}

function getCmdSetBackgroundColor(color) {
    return {
        type: SET_BACKGROUND_COLOR,
        color
    };
}



export function addLabel(label) {
    return {
        type: ADD_LABEL,
        label
    };
}

export function updateLabel(label) {
    return {
        type: UPDATE_LABEL,
        label
    };
}

// unitTestActions()
async function unitTestActions() {
    await loadBoards()
    await addBoard(boardService.getEmptyBoard())
    await updateBoard({
        _id: 'm1oC7',
        title: 'Board-Good',
    })
    await removeBoard('m1oC7')
    // TODO unit test addBoardMsg
}