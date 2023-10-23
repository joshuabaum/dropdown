import '../../style/dropdown.css';

import { AiOutlineCheckSquare, AiOutlineBorder} from "react-icons/ai";
function DropDownItem ({option, isItemSelected, isCheckSquareEnabled, updateSelectedItems}) {
    return (
        <li className="DropDownItem" onClick={() => updateSelectedItems(option)}>
            <p className="DropDownItemTitle">{option.name}</p>
            {
                isCheckSquareEnabled
                ? 
                    (isItemSelected(option)
                    ? <AiOutlineCheckSquare  className="DropDownItemIconSelected"/> 
                    : <AiOutlineBorder  className="DropDownItemIcon"/>)
                : <div></div>
            }
        </li> 
    )
}

export {DropDownItem};
