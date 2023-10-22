import './App.css';
import './components/dropdown/DropDown'
import DropDown from './components/dropdown/DropDown';

import { states, artists} from './data/data';

function App() {
  return (
    <div className="App">
      <div style={{height:10}}></div>
      
      <h1>Example 1: Single Select & Scrollable Item List</h1>
      <DropDown title="State" isMultiSelect={false} options={states}></DropDown>
      <div style={{height:10}}></div>
      
      <h1>Example 2: Single Select & Non Scrollable Item List</h1>
      <DropDown title="artist" isMultiSelect={false} options={artists}></DropDown>
      <div style={{height:10}}></div>

      <h1>Example 3: Multi Select & Scrollable Item List</h1>
      <DropDown title="State" isMultiSelect={true} options={states}></DropDown>
      <div style={{height:10}}></div>

      <h1>Example 4: Multi Select & Non Scrollable Item List</h1>
      <DropDown title="artist" isMultiSelect={true} options={artists}></DropDown>
      <div style={{height:10}}></div>
    </div>
  );
}

export default App;
