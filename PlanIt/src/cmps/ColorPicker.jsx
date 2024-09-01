export function ColorPicker({ onColorSelect }) {

    const colors = [
        { name: 'blue', first: '#0048c9', second: '#36c4f2' },
        { name: 'darkBlue', first: '#002b80', second: '#0048c9' },
        { name: 'purple', first: '#4a3a8b', second: '#e278d7' },
        { name: 'lightPurple', first: '#d25bc8', second: '#e7a7eb' },
        { name: 'orange', first: '#ff7b45', second: '#ffac53' },
        { name: 'peachPink', first: '#ff6f71', second: '#fbaeaa' },
        { name: 'teal', first: '#006e64', second: '#34a49b' },
        { name: 'darkTealBlue', first: '#2b455d', second: '#4b6082' },
        { name: 'darkRed', first: '#472318', second: '#803021' },
    ];

    return (
        <div className="color-picker">
            <h4>Select Background Color</h4>
            <div className="color-options">
                {colors.map((color) => (
                    <button
                        key={color.name}
                        className="color-btn"
                        style={{ background: `linear-gradient(to bottom right, ${color.first}, ${color.second})` }}
                        onClick={() => onColorSelect(color)}
                    />
                ))}
            </div>
        </div>
    );
}