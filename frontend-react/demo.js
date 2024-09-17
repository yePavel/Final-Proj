
// @@@@@ store

export async function updateBoard(board) {
    try {
        const savedBoard = await boardService.save(board)
        store.dispatch(getCmdUpdateBoard(savedBoard))
        return savedBoard
    } catch (err) {
        console.log('Cannot update board', err)
        throw err
    }
}

// @@@@@ backend

try {
    const updatedBoard = await boardService.update(board)
    socketService.broadcast({ type: 'board-updated', room: board._id, data: updatedBoard })
    res.json(updatedBoard)
} catch (err) {
    logger.error('Failed to update board', err)
    res.status(400).send({ err: 'Failed to update board' })
}

// @@@@@ frontend

export function BoardDetails() {

    useEffect(() => {

        socketService.on(SOCKET_EVENT_BOARD_UPDATED, updatedBoard => {
            dispatch(getCmdUpdateBoard(updatedBoard))
        })

        return () => {
            socketService.off(SOCKET_EVENT_BOARD_UPDATED)
        }

    }, [])

}



