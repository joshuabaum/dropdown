import '../../style/dropdown.css';

import { AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai";

function DropDownButton({isOpen, setIsOpen, selectedItems, selectionTitle, SELECT_ALL_ITEM}) {

    return (
        <button className={("DropDownButton" )  + (isOpen ? " DropDownButtonOpen" : "")} onClick={() => setIsOpen(prev => !prev)}>  
            <div className="DropDownButtonTitleContainer">
                {
                    selectedItems.size === 0
                        ? "Select " + (selectionTitle.match('^[aieouAIEOU].*') ? "an " : "a ") + selectionTitle 
                        : Array.from(selectedItems).map((item, index) =>
                            {
                                return (
                                    !(item.name === SELECT_ALL_ITEM.name) ?
                                    <p className="DropDownButtonTitle">
                                        {item.name + (index === selectedItems.size - 1  ? "" : ", ") }
                                    </p>
                                    :
                                    <div></div>
                                )
                            })
                }
            </div>
            {isOpen ? <AiOutlineCaretUp className="DropDownButtonIcon"/>  : <AiOutlineCaretDown className="DropDownButtonIcon"/> }
        </button>
    );
}

export default DropDownButton;
