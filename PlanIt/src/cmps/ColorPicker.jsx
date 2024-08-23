import { useState } from "react";

export function ColorPicker({ onColorSelect }) {
    const colors = [
        "#0079bf",
        "#d29034",
        "#519839",
        "#b04632",
        "#89609e",
        "#cd5a91",
        "#4bbf6b",
        "#00aecc",
        "#838c91"];
        
    return (
        <div className="color-picker">
            <h4>Select Background Color</h4>
            <div className="color-options">
                {colors.map((color) => (
                    <button
                        key={color}
                        className="color-btn"
                        style={{ backgroundColor: color }}
                        onClick={() => onColorSelect(color)}
                    />
                ))}
            </div>
        </div>
    );
}
