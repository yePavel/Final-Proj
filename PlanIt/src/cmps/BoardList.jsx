
import { useEffect, useState } from "react"
import { getProjectData } from "../services/local.service.js"

export function BoardList() {
    const [boards, setBoards] = useState([])

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
        return initials;
    };

    useEffect(() => {
        loadBoards()
    }, [])

    return (
        <div className="board-list">
            {boards.map(board => (
                <div key={board.title} className="board-card">
                    <h2 className="board-title">{board.title}</h2>
                    <div className="board-groups">
                        {board.groups.map(group => (
                            <div key={group.id} className="group-card">
                                <h3>{group.title}</h3>
                                <div className="tasks">
                                    {group.tasks.map(task => (
                                        <div key={task.id} className="task">
                                            <p>{task.title}</p>
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
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
