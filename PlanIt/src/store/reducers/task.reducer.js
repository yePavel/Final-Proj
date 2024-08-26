export const SET_TASK = 'SET_TASK'
export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

const initialState = {
    task: [],
}

export function taskReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_TASK:
            return { ...state, task: action.task }
        case UPDATE_TASK:
            return {
                ...state,
                task: state.task.map(task =>
                    task._id === action.task._id ? action.task : task
                )
            }
        default:
            return state
    }
}
