import { httpService } from '../http.service'
import { boardService } from '../board'


export const taskService = {
    query,
    saveTaskMembers,
    saveTaskChecklist,
    getDefaultTask
}

async function query(boardId, groupId, taskId) {
    try {
        const board = await httpService.get(`board/${boardId}`)
        const group = board.groups.find(group => group.id === groupId)
        const task = group.tasks.find(task => task.id === taskId)
        return task
    }
    catch (err) {
        return console.log('Felid to get task:', err)
    }
}

async function saveTaskMembers(boardId, groupId, updatedTask) {
    try {
        const board = await _saveTask(boardId, groupId, updatedTask)
        return { board, task: updatedTask }
    } catch (err) {
        return console.log('Felid to save task:', err)
    }
}

async function saveTaskChecklist(boardId, groupId, updatedTask) {
    await _saveTask(boardId, groupId, updatedTask);
    return updatedTask;
}

async function _saveTask(boardId, groupId, updatedTask) {

    try {
        const board = await httpService.get(`board/${boardId}`)

        const group = board.groups.find(group => group.id === groupId)
        const taskIndex = group.tasks.findIndex(task => task.id === updatedTask.id)

        group.tasks[taskIndex] = updatedTask;

        const groupIndex = board.groups.findIndex(g => g.id === groupId);
        board.groups[groupIndex] = { ...group };

        return await boardService.save(board)
    } catch (err) {
        return console.log('Felid to save task:', err)
    }
}

export function getDefaultTask() {
    return {
        id: "",
        title: "",
        archivedAt: null,
        status: "todo",
        priority: "low",
        dueDate: null,
        description: "",
        comments: [],
        checklists: [],
        members: [],
        labels: [],
        byMember: {
            _id: "",
            fullname: "",
            color: "",
            imgUrl: ""
        },
        style: {
            backgroundColor: ""
        }
    }
}
