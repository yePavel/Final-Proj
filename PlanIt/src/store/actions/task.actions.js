import { taskService } from "../../services/task/task.service.local.js"
import { SET_TASK } from "../reducers/task.reducer.js"
import { store } from '../store'

export async function loadTask(boardId, groupId, taskId) {

    try {
        const task = await taskService.query(boardId, groupId, taskId)
        store.dispatch({ type: SET_TASK, task })
    } catch (err) {
        console.log('Task: err in loadTask', err)
        throw err
    }
}

