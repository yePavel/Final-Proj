import React from "react";

export function NavItem({
  label,
  iconPath,
  onClick,
  isDropdownOpen,
  dropdownItems,
  onDropdownItemClick = () => { },
  isCreateButton,
  isDropdown,
  board
}) {
  return (
    <div
      className={`nav-item ${isCreateButton ? "create-button" : ""}`}
      onClick={onClick}
      style={{
        background: `${board?.style.background.first}`,
        color: `${board?.style.background.name ? "#F5F5F5" : `rgb(23 43 77 / 75%)`}`,
      }}
    >
      {label}
      {iconPath && (
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d={iconPath} fill="currentColor" />
        </svg>
      )}
      {isDropdown && isDropdownOpen && dropdownItems && (
        <div className="dropdown-menu show">
          {dropdownItems.map((item) => (
            <div
              key={item}
              className="dropdown-item"
              onClick={() => onDropdownItemClick(item) && onDropdownItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
