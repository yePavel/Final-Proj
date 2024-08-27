import { getInitials } from "../services/util.service";


export function AssignedMember({ members }) {

    return <div className="members">
        {members?.map((member) => (
            <div key={member._id} className="member"
                style={{ backgroundColor: `${member.color}`, color: 'white' }}>
                {getInitials(member.fullname)}
            </div>
        ))}
    </div>
}