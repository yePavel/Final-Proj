
export function BoardIndex() {
    return <section className="main-boards-container">
        <nav className="boards-manu">
            <div className="upper-manu">
                <ul>
                    <li className="active">Boards</li>
                    <li>Templates</li>
                    <li>Home</li>
                </ul>
            </div>
            <div className="lower-manu">
                <ul>
                    <li>Gatting started</li>
                    <li>Boards</li>
                    <li>Collections</li>
                    <li>Highlights</li>
                    <li>Views</li>
                    <li>Members</li>
                    <li>Settings</li>
                    <li>Billing</li>
                </ul>
            </div>
        </nav>
        <div className="board-list-container">
            <div className="starred-boards">
                <h3>⭐ Starred boards</h3>
            </div>
            <div className="user-boards">
                <h3>Your workspaces</h3>
            </div>
        </div>
    </section>
}