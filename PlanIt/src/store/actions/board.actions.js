import { boardService } from '../../services/board'
import { store } from '../store'
import { ADD_BOARD, REMOVE_BOARD, SET_BOARDS, SET_BOARD, UPDATE_BOARD, ADD_BOARD_MSG, SET_STARRED, ADD_STARRED_BOARD, REMOVE_STARRED_BOARD, SET_BACKGROUND_COLOR } from '../reducers/board.reducer'

export async function loadBoards(filterBy) {
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

export async function setBackgroundColor(color) {
    try {
        store.dispatch(getCmdSetBackgroundColor(color));
    } catch (err) {
        console.log('Cannot set background color', err);
        throw err;
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
function getCmdUpdateBoard(board) {
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
