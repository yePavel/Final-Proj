import { useSelector } from "react-redux";
import { updateBoard } from "../store/actions/board.actions";

const colors = [
    '#FFD1DC', // Pastel Pink
    '#B2F5EA', // Mint Green
    '#E6E6FA', // Lavender
    '#87CEFA', // Light Sky Blue
    '#FFDAB9', // Peach Puff
    '#EEE8AA', // Pale Goldenrod
    '#F08080', // Light Coral
    '#B0E0E6', // Powder Blue
    '#F0FFF0', // Honeydew
    '#FFFACD'  // Lemon Chiffon
];

export function GroupMenuDropDown({ group }) {
    const board = useSelector(storeState => storeState.boardModule.board)
    const { groups } = board
    console.log('group:', group)

    function changeGroupColor(clr) {
        const groupIdx = groups.findIndex(g => g.id === group.id)

        group.style = { color: clr }
        board.groups[groupIdx] = group

        updateBoard(board)
    }

    return <div className="dropmenu-colors">
        {colors.map(color =>
            <button
                key={color}
                onClick={() => changeGroupColor(color)}
                className="dropmenu-colored-btn"
                style={{ background: `${color}` }}
            >
            </button>
        )
        }
    </div >
}