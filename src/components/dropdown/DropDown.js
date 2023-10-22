import '../../style/dropdown.css';
import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineCheckSquare, AiOutlineBorder} from "react-icons/ai";

// TODO:
// 1. Styling sucks
// 2. Limit # of visible buttons and add scrolling
// 3. Add some different examples across the pages
// 4. Add an obserable

const REMOVE_ALL = -1;
const ADD_ALL = -2;

function DropDown({title, options, isMultiSelect}) {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedItems, setSelectedItems] = useState(new Set());

   const updateSelectedItems = (item) => {
    const isSelected = selectedItems.has(item);

    if (item === REMOVE_ALL) {
        selectedItems.clear();
    } else if (item === ADD_ALL)  {
        selectedItems.clear();
        for (const option of options) {
            selectedItems.add(option);
        }
    } else if (isMultiSelect) {
        if (isSelected) {
            selectedItems.delete(item);
        } else {
            selectedItems.add(item);
        }
    } else {
        selectedItems.clear();
        if (!isSelected) {
            selectedItems.add(item);
        }
    } 
    setSelectedItems(new Set(selectedItems));
   }

  return (
    <div className="DropDown">
            <button className="DropDownButton" onClick={() => setIsOpen(prev => !prev)}>  
        
                <div className="DropDownButtonTitleContainer">
                    {
                        selectedItems.size === 0 
                            ? "Select " + (title.match('^[aieouAIEOU].*') ? "an " : "a ") + title 
                            : Array.from(selectedItems).map((item, index) => {
                                 return (
                                    <p className="DropDownButtonTitle">
                                        {item.name + (index === selectedItems.size - 1  ? "" : ", ") }
                                    </p>
                                 )
                                })
                    }
                </div>
                
                
                {isOpen ? <AiOutlineCaretUp className="DropDownButtonIcon"/>  : <AiOutlineCaretDown className="DropDownButtonIcon"/> }
                
            </button>
            { isOpen ? 
                <ul className="DropDownList"> 
                    <li className="DropDownItem" onClick={() => updateSelectedItems(REMOVE_ALL)}>
                        <p className="DropDownItemTitle" style={{fontStyle: "italic"}}>
                            Clear Selection
                        </p>
                    </li>
                    {isMultiSelect ? 
                        <li className="DropDownItem" onClick={() => updateSelectedItems(ADD_ALL)}>
                            <p className="DropDownItemTitle" style={{fontStyle: "italic"}}>Select All</p>
                        </li>  
                        : <div></div>
                    }
                    {options.map((item, index) => {
                        return (
                                <li className="DropDownItem" onClick={() => updateSelectedItems(item)}>
                                    <p className="DropDownItemTitle">{item.name}</p>
                                    {selectedItems.has(item) ? <AiOutlineCheckSquare  className="DropDownItemIconSelected"/> : <AiOutlineBorder  className="DropDownItemIcon"/>}
                                </li> 
                                )
                    })}
                </ul> 
                : <div></div> 
            }
      </div>
  );
}

export default DropDown;
