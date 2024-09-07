import { httpService } from '../http.service'

export const boardService = {
    query,
    getById,
    save,
    remove,
    addBoardMsg,
    getStarredBoards,
    getLabels

}

async function query(filterBy = { txt: '', price: 0 }) {
    console.log('REMOTE MODE',)
    return httpService.get(`board`, filterBy)
}

function getById(boardId) {
    return httpService.get(`boards/${boardId}`)
}

async function remove(boardId) {
    return httpService.delete(`board/${boardId}`)
}
async function save(board) {
    var savedBoard
    if (board._id) {
        savedBoard = await httpService.put(`board/${board._id}`, board)
    } else {
        savedBoard = await httpService.post('board', board)
    }
    return savedBoard
}

async function addBoardMsg(boardId, txt) {
    const savedMsg = await httpService.post(`board/${boardId}/msg`, { txt })
    return savedMsg
}

async function getStarredBoards() {
    const boards = await httpService.get('board');
    var starredBoards = boards.filter((board) => board.isStarred === true);
    if (!starredBoards) return;
    return starredBoards;
}

async function getLabels() {
    const boards = await httpService.get('board');
    var labels = boards.filter(board => board[0].labels)
    console.log('labels:', labels)
    return labels
}