import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Notifications } from "./Notifications";
import { NavItem } from "./NavItem";
import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { FaTrello } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

export function AppHeader() {
  const board = useSelector((storeState) => storeState.boardModule.board);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [notifications, setNotifications] = useState([
    "New comment on your task",
    "Task deadline approaching",
    "You were mentioned in a board",
  ]);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const navigate = useNavigate();

  const handleWorkspaceClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleBoardSelection = () => {
    setIsDropdownOpen(false);
    navigate("/boards");
  };

  const handleMenuClick = () => {
    navigate("/boards");
  };

  const handleNotificationClick = () => {
    if (isNotificationsOpen) {
      setNotifications([]);
    }
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const getInitials = (name) => {
    const nameParts = name.split(" ");
    if (nameParts.length > 1) {
      const firstInitial = nameParts[0][0].toUpperCase();
      const lastInitial = nameParts[nameParts.length - 1][0].toUpperCase();
      return `${firstInitial}${lastInitial}`;
    } else {
      return name[0].toUpperCase();
    }
  };

  const userName = "Sean Mamistalov";
  const initials = getInitials(userName);

  return (
    <header
      className="app-header"
      style={{
        background: `${board?.style.background.first}`,
        color: `${board?.style.background.name ? "#F5F5F5" : `#172b4d`}`,
      }}
    >
      <div className="left-section">
        <CgMenuGridO className="menu-icon" style={{
          background: `${board?.style.background.first}`,
          color: `${board?.style.background.name ? "#F5F5F5" : `rgb(23 43 77 / 75%)`}`,
        }} />
        <div className="logo">
          <FaTrello style={{
            background: `${board?.style.background.first}`,
            color: `${board?.style.background.name ? "#F5F5F5" : `rgb(23 43 77 / 75%)`}`,
          }} />
          <div className="planit-logo" style={{
            background: `${board?.style.background.first}`,
            color: `${board?.style.background.name ? "#F5F5F5" : `rgb(23 43 77 / 75%)`}`,
          }}>
            <a href="/" style={{
              color: `${board?.style.background.name ? "#F5F5F5" : `rgb(23 43 77 / 75%)`}`,
            }}>PlanIt</a>
          </div>
        </div>

        <nav className="nav">
          <NavItem board={board}
            label="Workspaces"
            iconPath="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z"
            onClick={handleWorkspaceClick}
            isDropdownOpen={isDropdownOpen}
            isDropdown={true}
            dropdownItems={[
              <span
                key="trello-workspace"
                onClick={handleBoardSelection}
                className="dropdown-item"
              >
                <div className="letter-p">P</div>
                <span className="workspace-label">PlanIt Workspace</span>
              </span>,
            ]}
          />
        </nav>
      </div>

      <div className="right-section">
        <div className="search-container">
          <BsSearch className="search-icon" />
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="icon-container">
          <Notifications
            notifications={notifications}
            isNotificationsOpen={isNotificationsOpen}
            handleNotificationClick={handleNotificationClick}
          />
        </div>
        <img src="/questionmark.svg" alt="Help" className="icon help-icon" />
        <div className="user-logo">{initials}</div>
      </div>
    </header>
  );
}
