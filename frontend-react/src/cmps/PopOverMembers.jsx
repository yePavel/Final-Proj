import { useSelector } from "react-redux";
import { getInitials } from "../services/util.service.js";
import { updateTaskMembers } from "../store/actions/board.actions.js";
import { useEffect, useState } from "react";


export function PopOverMembers({ group }) {
    const board = useSelector(storeState => storeState.boardModule.board)
    const task = useSelector(storeState => storeState.boardModule.task)
    const [boardMembers, setBoardMembers] = useState([])
    const { members } = task

    useEffect(() => {
        const membersDiff = board.members.filter(member =>
            !members?.some(m => m._id === member._id)
        )
        setBoardMembers(membersDiff)
    }, [members])


    function addMember(member) {
        const updatedMembers = [...members, member]
        const updatedTask = { ...task, members: updatedMembers }
        updateTaskMembers(board._id, group.id, updatedTask)
    }

    function removeMember(memberId) {
        const updatedMembers = members.filter(member => member._id !== memberId)
        const updatedTask = { ...task, members: updatedMembers }
        updateTaskMembers(board._id, group.id, updatedTask)
    }
    console.log('board:', board)
    return <>
        <div className="pop-header">
            <h3>Members</h3>
        </div>
        <div className="pop-content-container">
            <input type="text" placeholder="Serach mebmers" />
            {members?.length !== 0 &&
                <div>
                    <h4>Card members</h4>
                    <ul className="pop-list">
                        {members?.map((member) =>
                        (<li key={member._id}>
                            <button onClick={() => removeMember(member._id)}>
                                <div className="member" style={{ backgroundColor: `${member.color}` }} >{getInitials(member.fullname)}</div>
                                <div className="member-name">{member.fullname}</div>
                                <div className="remove-user">X</div>
                            </button>
                        </li>)
                        )}
                    </ul>
                </div>
            }
            {boardMembers?.length !== 0 &&
                <div>
                    <h4>Board members</h4>
                    <ul className="pop-list">
                        {boardMembers?.map((member) =>
                        (<li key={member._id}>
                            <button onClick={() => addMember(member)}>
                                <div className="member" style={{ backgroundColor: `${member.color}` }} >{getInitials(member.fullname)}</div>
                                <div className="member-name">{member.fullname}</div>
                            </button>
                        </li>)
                        )}
                    </ul>
                </div>
            }
        </div>
    </>
}