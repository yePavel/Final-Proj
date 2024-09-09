import { useSelector } from "react-redux";
import { updateBoard } from "../store/actions/board.actions";

const colors = [
    '#E6BCC4',
    '#A4E2D6',
    '#D1D1E1',
    '#7AB8E4',
    '#E6C3A3',
    '#D6D096',
    '#D67070',
    '#A2CDD1',
    '#D9E6D9',
    '#E6E0B8'
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