import { storageService } from '../async-storage.service'
import { userService } from '../user'

const STORAGE_KEY = 'board'

export const taskService = {
    query,
}

async function query(boardId, groupId, taskId) {
    const boards = await storageService.query(STORAGE_KEY)
    const board = boards.find(board => board._id === boardId)

    const group = board.groups.find(group => group.id === groupId)
    const task = group.tasks.find(task => task.id === taskId)
    return task

}