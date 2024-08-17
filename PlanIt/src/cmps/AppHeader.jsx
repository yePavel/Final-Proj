import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function AppHeader() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [notifications, setNotifications] = useState([
        "New comment on your task",
        "Task deadline approaching",
        "You were mentioned in a board"
    ])
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)

    const boards = ["final-proj"]
    const navigate = useNavigate()

    const handleWorkspaceClick = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleBoardSelection = (board) => {
        setIsDropdownOpen(false)
        navigate(`/boards/${board}`)
    }

    const handleMenuClick = () => {
        navigate('/')
    }

    const handleNotificationClick = () => {
        setIsNotificationsOpen(!isNotificationsOpen)
    }

    const getInitials = (name) => {
        const nameParts = name.split(' ');
        if (nameParts.length > 1) {
            const firstInitial = nameParts[0][0].toUpperCase();
            const lastInitial = nameParts[nameParts.length - 1][0].toUpperCase();
            return `${firstInitial}${lastInitial}`;
        } else {
            return name[0].toUpperCase();
        }
    }

    const userName = "Sean Mamistalov";
    const initials = getInitials(userName);

    return (
        <header className="app-header">
            <div className="left-section">
                <img src="/menu.svg" alt="Menu" className="menu-icon" onClick={handleMenuClick} />
                <div className="icon-container">
                    <svg className="hover-icon" width="24" height="24" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z" fill="currentColor" />
                    </svg>
                    <a href="/" className="logo">PlanIt</a>
                </div>
                <nav className="nav">
                    <div className="nav-item" onClick={handleWorkspaceClick}>
                        Workspaces
                        <svg width="16" height="16" viewBox="0 0 24 24">
                            <path d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z" fill="currentColor" />
                        </svg>
                        {isDropdownOpen && (
                            <div className="dropdown-menu show">
                                {boards.map((board) => (
                                    <div
                                        key={board}
                                        className="dropdown-item"
                                        onClick={() => handleBoardSelection(board)}
                                    >
                                        {board}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="nav-item">
                        Recent <svg
                            width="16" height="16" role="presentation"
                            focusable="false" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z"
                                fill="currentColor">
                            </path>
                        </svg>
                    </div>
                    <div className="nav-item">
                        Starred <svg
                            width="16" height="16" role="presentation"
                            focusable="false" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z"
                                fill="currentColor">
                            </path>
                        </svg>
                    </div>
                    <div className="nav-item">
                        Templates <svg
                            width="16" height="16" role="presentation"
                            focusable="false" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z"
                                fill="currentColor">
                            </path>
                        </svg>
                    </div>
                    <div className="nav-item create-button">Create</div>                
                </nav>
            </div>
            <div className="right-section">
                <input type="text" className="search-bar" placeholder="Search..." />
                <div className="icon-container">
                    <div className="notification-icon" onClick={handleNotificationClick}>
                        <img src="/notification.svg" alt="Notifications" />
                        {notifications.length > 0 && (
                            <div className="notification-badge">{notifications.length}</div>
                        )}
                    </div>
                    {isNotificationsOpen && (
                        <div className="notifications-dropdown">
                            {notifications.length > 0 ? (
                                notifications.map((notification, index) => (
                                    <div key={index} className="notification-item">
                                        {notification}
                                    </div>
                                ))
                            ) : (
                                <div className="notification-item">No notifications</div>
                            )}
                        </div>
                    )}
                </div>
                <img src="/questionmark.svg" alt="Help" className="icon help-icon" />
                <div className="user-logo">{initials}</div>
            </div>
        </header>
    )
}
