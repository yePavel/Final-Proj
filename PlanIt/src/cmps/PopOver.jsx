import { setBackgroundColor } from "../store/actions/board.actions";

export function PopOver() {
    return <div className="pop-over" id='popover'>
        <div className="pop-header">
            <h3>Members</h3>
        </div>
        <div className="pop-content-container">
            <input type="text" placeholder="Serach mebmers" />
            <h4>Card members</h4>
            <ul className="pop-list">
                <li>
                    <button>
                        <span style={{ backgroundColor: 'green' }} className="member">PY</span>
                        Pavel yel
                    </button>
                </li>
                <li>
                    <button>
                        <span style={{ backgroundColor: 'red' }} className="member">DY</span>
                        Danny Yacovi
                    </button>
                </li>
                <li>
                    <button>
                        <span style={{ backgroundColor: 'blue' }} className="member">SM</span>
                        Sean Mamistalov
                    </button>
                </li>
            </ul>
        </div>
    </div>
}