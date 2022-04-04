import { useState } from 'react';
import './App.css';
import Adder from './Components/Adder';
import Displayer from './Components/Displayer';
// import Maps from './Map';

function App() {

  const [ count, setCount ] = useState(1);
  const [ count2, setCount2 ] = useState(50);

  return (
    <div className='App.css'>
      <h1>Hello World let do { count }</h1>
      <button 
      onClick={() => {console.log("click"); 
      setCount( (currValue) => {return currValue + 1})}}>Addition
      </button>

      <Displayer value={count2} />
      <Adder theFunction={ setCount2 }/>
    </div>
  );
}

export default App;
