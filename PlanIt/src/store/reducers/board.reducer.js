export const SET_BOARDS = 'SET_BOARDS'
export const SET_BOARD = 'SET_BOARD'
export const REMOVE_BOARD = 'REMOVE_BOARD'
export const ADD_BOARD = 'ADD_BOARD'
export const UPDATE_BOARD = 'UPDATE_BOARD'
export const ADD_BOARD_MSG = 'ADD_BOARD_MSG'

export const SET_STARRED = 'SET_STARRED'
export const ADD_STARRED_BOARD = 'ADD_STARRED_BOARD'
export const REMOVE_STARRED_BOARD = 'REMOVE_STARRED_BOARD'

export const SET_BACKGROUND_COLOR = 'SET_BACKGROUND_COLOR'

export const SET_TASK = 'SET_TASK'
export const UPDATE_TASK_MEMBERS = 'UPDATE_TASK_MEMBERS'

export const ADD_CHECKLIST = 'ADD_CHECKLIST'
export const ADD_CHECKLIST_ITEM = 'ADD_CHECKLIST_ITEM';


const initialState = {
    boards: [],
    board: null,
    starredBoards: [],
    backgroundColor: '#ffffff',
    task: [{
        checklist: [],
    }
    ],
    taskMembers: [],
}

export function boardReducer(state = initialState, action) {

    var newState = state
    var boards
    switch (action.type) {
        case SET_BOARDS:
            const noStarBoards = action.boards.filter(board => !board.isStarred)
            newState = { ...state, boards: noStarBoards }
            break
        case SET_BOARD:
            newState = { ...state, board: action.board }
            break
        case REMOVE_BOARD:
            const lastRemovedBoard = state.boards.find(board => board._id === action.boardId)
            boards = state.boards.filter(board => board._id !== action.boardId)
            newState = { ...state, boards, lastRemovedBoard }
            break
        case ADD_BOARD:
            newState = { ...state, boards: [...state.boards, action.board] }
            break
        case UPDATE_BOARD:
            newState = { ...state, board: action.board }
            break
        case ADD_BOARD_MSG:
            newState = { ...state, board: { ...state.board, msgs: [...state.board.msgs || [], action.msg] } }
            break
        case SET_STARRED:
            var starBoards = action.boards.filter(board => board.isStarred)
            newState = { ...state, starredBoards: starBoards }
        case ADD_STARRED_BOARD:
            if (action.board) {
                boards = state.boards.filter(board => board._id !== action.board._id)
                const updatedState = { ...state, boards }
                newState = { ...updatedState, starredBoards: [...updatedState.starredBoards, action.board] }
            }
            break
        case REMOVE_STARRED_BOARD:
            var starredItems = state.starredBoards.filter(board => board._id !== action.board._id)
            const updatedState = { ...state, starredBoards: starredItems }
            newState = { ...updatedState, boards: [...updatedState.boards, action.board] }
            break
        case SET_BACKGROUND_COLOR:
            return {
                ...state,
                board: {
                    ...state.board,
                    style: {
                        ...state.board.style,
                        background: action.color
                    }
                }
            };
        case SET_TASK:
            return { ...state, task: action.task }
            break
        case UPDATE_TASK_MEMBERS:
            console.log('action.board:', action.board)
            break
        case ADD_CHECKLIST:
            const updatedTaskChecklist = { ...state.task, checklists: [...state.task.checklists || [], action.checklist] };
            newState = { ...state, task: updatedTaskChecklist };
            break
        case ADD_CHECKLIST_ITEM:
            const updatedChecklists = state.task.checklists.map(checklist => {
                if (checklist.title === action.checklistTitle) {
                    return {
                        ...checklist,
                        items: [...checklist.items || [], action.item]
                    };
                }
                return checklist;
            });
            newState = { ...state, task: { ...state.task, checklists: updatedChecklists } };
            break;
        default:

    }
    return newState
}

// unitTestReducer()

function unitTestReducer() {
    var state = initialState
    const board1 = { _id: 'b101', vendor: 'Board ' + parseInt(Math.random() * 10), msgs: [] }
    const board2 = { _id: 'b102', vendor: 'Board ' + parseInt(Math.random() * 10), msgs: [] }

    state = boardReducer(state, { type: SET_BOARDS, boards: [board1] })
    console.log('After SET_BOARDS:', state)

    state = boardReducer(state, { type: ADD_BOARD, board: board2 })
    console.log('After ADD_BOARD:', state)

    state = boardReducer(state, { type: UPDATE_BOARD, board: { ...board2, vendor: 'Good' } })
    console.log('After UPDATE_BOARD:', state)

    state = boardReducer(state, { type: REMOVE_BOARD, boardId: board2._id })
    console.log('After REMOVE_BOARD:', state)

    const msg = { id: 'm' + parseInt(Math.random() * 100), txt: 'Some msg' }
    state = boardReducer(state, { type: ADD_BOARD_MSG, boardId: board1._id, msg })
    console.log('After ADD_BOARD_MSG:', state)

    state = boardReducer(state, { type: REMOVE_BOARD, boardId: board1._id })
    console.log('After REMOVE_BOARD:', state)
}