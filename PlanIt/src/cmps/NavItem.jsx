import React from "react";

export function NavItem({
  label,
  iconPath,
  onClick,
  isDropdownOpen,
  dropdownItems,
  onDropdownItemClick = () => {},
  isCreateButton,
  isDropdown,
}) {
  return (
    <div
      className={`nav-item ${isCreateButton ? "create-button" : ""}`}
      onClick={onClick}
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
