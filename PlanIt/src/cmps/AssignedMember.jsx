

export function AssignedMember({ members }) {

    function getInitials(fullname) {
        const nameParts = fullname.split(" ");
        const initials = nameParts.map((part) => part[0].toUpperCase()).join("");
        return initials;
    };

    return <div className="members">
        {members?.map((member) => (
            <div key={member._id} className="member">
                {getInitials(member.fullname)}
            </div>
        ))}
    </div>
}