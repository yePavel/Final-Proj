import { updateBoard } from '../../store/actions/board.actions'
import { storageService } from '../async-storage.service'
import { boardService } from '../board'

const STORAGE_KEY = 'board'

export const taskService = {
    query,
    saveTaskMembers
}

async function query(boardId, groupId, taskId) {
    try {
        const boards = await storageService.query(STORAGE_KEY)
        const board = boards.find(board => board._id === boardId)

        const group = board.groups.find(group => group.id === groupId)
        const task = group.tasks.find(task => task.id === taskId)
        return task
    }
    catch (err) {
        return console.log('Felid to get task:', err)
    }
}

async function saveTaskMembers(boardId, groupId, taskId, memberId) {
    const boards = await storageService.query(STORAGE_KEY)
    const board = boards.find(board => board._id === boardId)

    const group = board.groups.find(group => group.id === groupId)
    const taskIndex = group.tasks.findIndex(task => task.id === taskId)

    const members = group.tasks[taskIndex].members.filter(member => member._id !== memberId);

    const updatedTask = { ...group.tasks[taskIndex], members };
    group.tasks[taskIndex] = updatedTask;

    const groupIndex = board.groups.findIndex(g => g.id === groupId);
    board.groups[groupIndex] = { ...group };

    return await boardService.save(board)
}


async function _getTask(boardId, groupId, taskId) {

}