import './App.css';
import './components/dropdown/DropDown'
import DropDown from './components/dropdown/DropDown';

import { states } from './data/data';

function App() {
  return (
    <div className="App">
      <DropDown title="State" isMultiSelect={true} options={states}></DropDown>

      {/* <br></br> */}

      {/* <DropDown title="non-multi" isMultiSelect={false} options={[{"name" : "item5"}, {"name" : "item76"}, {"name" : "item8"}]}></DropDown> */}

    </div>
  );
}

export default App;
