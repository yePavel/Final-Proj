import { useEffect, useState } from "react"
import { getProjectData } from "../services/local.service.js"

export function BoardList() {
    const [boards, setBoards] = useState([])
    const [newTask, setNewTask] = useState({ groupId: null, title: '' })
    const [ isAddingTask, setIsAddingTask ] = useState(null)

    function loadBoards() {
        getProjectData()
            .then(data => {
                setBoards(data)
            })
            .catch(error => {
                console.error("Error loading boards", error)
            })
    }

    const getInitials = (fullname) => {
        const nameParts = fullname.split(' ')
        const initials = nameParts.map(part => part[0].toUpperCase()).join('')
        return initials
    }

    const handleNewTaskChange = (event) => {
        setNewTask({ ...newTask, title: event.target.value })
    }

    function addTask(groupId) {
        if (!newTask.title) return

        setBoards(prevBoards => {
            const updatedBoards = prevBoards.map(board => ({
                ...board,
                groups: board.groups.map(group =>
                    group.id === groupId
                        ? {
                            ...group,
                            tasks: [...group.tasks, { id: Date.now(), title: newTask.title }]
                        }
                        : group
                )
            }))

            localStorage.setItem('boards', JSON.stringify(updatedBoards))

            return updatedBoards
        })
        setNewTask({ groupId: null, title: '' })
        setIsAddingTask(null)
    }

    const handleDeleteClick = () => {
        setNewTask({groupId: null, title: ''})
        setIsAddingTask(null)
    }

    useEffect(() => {
        loadBoards()
    }, [])

    return (
        <div className="board-list">
            {boards.map(board => (
                <div key={board.title} className="board-card">
                    <h2 className="board-title">{board.title}</h2>
                    <div className="board-golders">
                        {board.groups.map(group => (
                            <div key={group.id} className="group-card">
                                <h3 className="group-title">{group.title}</h3>
                                <div className="tasks">
                                    {group.tasks.map(task => (
                                        <div key={task.id} className="task">
                                            <p className="task-title">{task.title}</p>
                                            <div className="labels">
                                                {board.labels.map(label => (
                                                    <span
                                                        key={label.id}
                                                        className="label"
                                                        style={{ backgroundColor: label.color }}>
                                                        {label.title}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="members">
                                                {board.members.map(member => (
                                                    <div key={member._id} className="member">
                                                        {getInitials(member.fullname)}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="add-task">
                                    {isAddingTask === group.id ? (
                                        <div className="task-input">
                                            <input className="task-input"
                                                type="text"
                                                value={newTask.title}
                                                onChange={handleNewTaskChange}
                                                placeholder="Enter a name for this card..."
                                            />
                                            <button onClick={() => addTask(group.id)} className="add-card-btn">Add card</button>
                                            <button onClick={handleDeleteClick} className="delete-add-card">X</button>
                                        </div>
                                    ) : (
                                        <button onClick={() => setIsAddingTask(group.id)} className="add-a-card-btn">
                                            + Add a card
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
