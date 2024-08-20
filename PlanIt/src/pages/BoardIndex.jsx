
export function BoardIndex() {


    return <section className="main-boards-container">
        <nav className="boards-manu">
            <div className="upper-manu">
                <ul>
                    <li className="active">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z" fill="#000000">
                        </path>
                        </svg> Boards</li>
                    <li>Templates</li>
                    <li>Home</li>
                </ul>
            </div>
            <div className="lower-manu">
                <ul>
                    <li>Gatting started</li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z" fill="#000000">
                        </path>
                        </svg> Boards
                    </li>
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
                <div className="starred-tittle">
                    <svg role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49495 20.995L11.9999 18.6266L16.5049 20.995C16.8059 21.1533 17.1507 21.2079 17.4859 21.1504C18.3276 21.006 18.893 20.2066 18.7486 19.3649L17.8882 14.3485L21.5328 10.7959C21.7763 10.5585 21.9348 10.2475 21.9837 9.91094C22.1065 9.06576 21.5209 8.28106 20.6758 8.15825L15.6391 7.42637L13.3866 2.86236C13.2361 2.55739 12.9892 2.31054 12.6843 2.16003C11.9184 1.78206 10.9912 2.0965 10.6132 2.86236L8.36072 7.42637L3.32403 8.15825C2.98747 8.20715 2.67643 8.36564 2.43904 8.60917C1.84291 9.22074 1.85542 10.1998 2.46699 10.7959L6.11158 14.3485L5.25121 19.3649C5.19372 19.7 5.24833 20.0448 5.40658 20.3459C5.80401 21.1018 6.739 21.3924 7.49495 20.995ZM19.3457 10.0485L15.6728 13.6287L16.5398 18.684L11.9999 16.2972L7.45995 18.684L8.327 13.6287L4.65411 10.0485L9.72993 9.31093L11.9999 4.71146L14.2699 9.31093L19.3457 10.0485Z">
                        </path>
                    </svg>
                    <h3> Starred boards</h3>
                </div>
                <ul className="starred-boards-list">
                    <li className="board-item"><div>Final proj</div></li>
                    <li className="board-item"><div>Project 1</div></li>
                    <li className="board-item"><div>Project 2</div></li>
                    <li className="board-item"><div>Project 3</div></li>
                </ul>
            </div>
            <div className="user-boards">
                <div className="starred-tittle">
                    <h3> Your workspaces</h3>
                </div>
                <ul className="user-boards-list">
                    <li className="board-item"><div>workSpace 1</div></li>
                    <li className="board-item"><div>workSpace 2</div></li>
                    <li className="board-item"><div>workSpace 3</div></li>
                    <li className="board-item"><div>workSpace 4</div></li>
                </ul>
            </div>
        </div>
    </section>
}