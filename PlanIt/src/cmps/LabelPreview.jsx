
export function LabelPreview({ labels }) {

    return <div className="labels">
        <span>
            {labels?.map((label) => (
                <span
                    key={label.id}
                    className="label"
                    style={{ backgroundColor: label.color }}>
                    {label.title}
                </span>
            ))}
        </span>
    </div>
}