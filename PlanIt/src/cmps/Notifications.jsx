import React from "react";

export function Notifications({ notifications, isNotificationsOpen, handleNotificationClick }) {
  return (
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
  );
}
