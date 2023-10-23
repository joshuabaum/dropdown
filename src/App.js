import './App.css';
import './components/dropdown/DropDown'
import DropDown from './components/dropdown/DropDown';

import { states, artists} from './data/data';

function App() {
  return (
    <div className="App">
      <div style={{height:10}}></div>
      
      <h1>Example 1: Single Select & Scrollable Item List</h1>
      <DropDown selectionTitle="State" isMultiSelectEnabled={false} selectableItems={states}></DropDown>
      <div style={{height:10}}></div>
      
      <h1>Example 2: Single Select & Non Scrollable Item List</h1>
      <DropDown selectionTitle="Artist" isMultiSelectEnabled={false} selectableItems={artists}></DropDown>
      <div style={{height:10}}></div>

      <h1>Example 3: Multi Select & Scrollable Item List</h1>
      <DropDown selectionTitle="State" isMultiSelectEnabled={true} selectableItems={states}></DropDown>
      <div style={{height:10}}></div>

      <h1>Example 4: Multi Select & Non Scrollable Item List</h1>
      <DropDown selectionTitle="Artist" isMultiSelectEnabled={true} selectableItems={artists}></DropDown>
      <div style={{height:10}}></div>
    </div>
  );
}

export default App;
