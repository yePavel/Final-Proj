import { PopOverMembers } from "./PopOverMembers.jsx";


export function MainPopOver({ chosenCmp, group }) {

    return <div className="pop-over" id='popover'>
        {chosenCmp === 'members' && <PopOverMembers group={group} />}
        {/* {chosenCmp === 'labels' && <PopOverLabels />} */}
        {/* {chosenCmp === 'checklist' && <PopOverCheckList />} */}
    </div>
}