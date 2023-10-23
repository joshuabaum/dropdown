import '../../style/dropdown.css';
import { useState } from 'react';

import DropDownButton from "./DropDownButton"
import {DropDownItem} from "./DropDownItem";

const CLEAR_SELECTION_ITEM = {name: "Clear Selection"};
const SELECT_ALL_ITEM = {name: "Select All"};

function DropDown({selectionTitle, selectableItems, isMultiSelectEnabled}) {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedItems, setSelectedItems] = useState(new Set());

   const isItemSelect = (item) => {
    return selectedItems.has(item);
   }

   const updateSelectedItems = (item) => {
    const isSelected = selectedItems.has(item);

    if (item === CLEAR_SELECTION_ITEM) {
        selectedItems.clear();
    } else if (item === SELECT_ALL_ITEM)  {
        selectedItems.clear();
        selectedItems.add(SELECT_ALL_ITEM)
        for (const option of selectableItems) {
            selectedItems.add(option);
        }
    } else if (isMultiSelectEnabled) {
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
        <DropDownButton isOpen={isOpen} setIsOpen={setIsOpen} selectedItems={selectedItems} selectionTitle={selectionTitle} SELECT_ALL_ITEM={SELECT_ALL_ITEM}/>
        {
            isOpen
            ? <ul className="DropDownItemList">
                <DropDownItem option={CLEAR_SELECTION_ITEM} style={{fontStyle: "italic"}} isItemSelected={isItemSelect} isCheckSquareEnabled={false} updateSelectedItems={updateSelectedItems}/>
                {
                    isMultiSelectEnabled
                    ? <DropDownItem option={SELECT_ALL_ITEM} style={{fontStyle: "italic"}} isItemSelected={isItemSelect} isCheckSquareEnabled={true} updateSelectedItems={updateSelectedItems}/>
                    : <div></div>
                }   
                {
                    selectableItems.map((option, index) => 
                    {
                        return (
                            <DropDownItem option={option} isItemSelected={isItemSelect} isCheckSquareEnabled={true} updateSelectedItems={updateSelectedItems}/>
                            )
                    })
                }
            </ul> 
            : <div></div> 
        }
    </div>
  );
}

export default DropDown;
