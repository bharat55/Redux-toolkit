import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter+1);
  }
  return (
    <div className="App">
      <button type="button" onClick={handleClick}>Click Me!</button>
      <h1>Counter: {counter}</h1>
    </div>
  );
}

export default App;
