import{ useState} from 'react';
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

function App() {
const [isVisible, setVisible] = useState(true);
console.log(isVisible);
  return (
    <div className="App">
      <button onClick={()=> setVisible(!isVisible)}>Toggle</button>
      {true && <ClassComponent/>}
      {/* <ClassComponent/> */}
      {isVisible ? <FunctionalComponent /> : null}
      {/* <FunctionalComponent /> */}
    
    </div>
  );
}

export default App;
