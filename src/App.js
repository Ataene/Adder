import { useState } from 'react';
import './App.css';
// import Maps from './Map';

function App() {

  const [ count, setCount ] = useState(1);

  return (
    <div>
      <h1>Hello World let do { count }</h1>
      <button onClick={() => console.log("click")}>Addition</button>
    </div>
  );
}

export default App;
