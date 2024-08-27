import { PopOverMembers } from "./PopOverMembers.jsx";


export function MainPopOver({ chosenCmp }) {

    return <div className="pop-over" id='popover'>
        {chosenCmp === 'members' && <PopOverMembers />}
        {/* {chosenCmp === 'labels' && <PopOverLabels />} */}
        {/* {chosenCmp === 'checklist' && <PopOverCheckList />} */}
    </div>
}