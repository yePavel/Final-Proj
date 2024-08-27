import { useSelector } from "react-redux";
import { getInitials } from "../services/util.service";

export function PopOverMembers() {
    const task = useSelector(storeState => storeState.taskModule.task)
    const { members } = task

    return <>
        <div className="pop-header">
            <h3>Members</h3>
        </div>
        <div className="pop-content-container">
            <input type="text" placeholder="Serach mebmers" />
            <h4>Card members</h4>
            <ul className="pop-list">
                {members?.map((member) =>
                (<li>
                    <button>
                        <span style={{ backgroundColor: `${member.color}` }} className="member">{getInitials(member.fullname)}</span>
                        {member.fullname}
                        <button className="remove-user">X</button>
                    </button>
                </li>)
                )}
            </ul>
        </div>
    </>
}