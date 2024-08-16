import React from 'react';
import '../assets/AppHeader.css'; 
export function AppHeader() {
    return (
        <header className="app-header">
            <div className="left-section">
                <div className="logo">PlanIt</div>
                <nav className="nav">
                    <div className="nav-item">Workspaces</div>
                    <div className="nav-item">Recent</div>
                    <div className="nav-item">Starred</div>
                    <div className="nav-item">Templates</div>
                    <div className="nav-item create-button">Create</div>
                </nav>
            </div>
            <div className="right-section">
                <input type="text" className="search-bar" placeholder="Search..." />
                <div className="icon notification-icon">🔔</div>
                <div className="icon help-icon">❓</div>
                <div className="user-logo">👤</div>
            </div>
        </header>
    );
}
