import { LuList } from "react-icons/lu";

export function CardActivity() {

    return <div className="card-activity">
        <LuList /><h3>Activity</h3>
        <div className="new-activity">
            <div className="member">PY</div>
            <div className="input-container">
                <input type="text" placeholder="Write a comment..." />
            </div>
        </div>
    </div>
}