import './App.css';
import { useState } from 'react';
import Counter from './componenets/Counter';
import Fruit from './componenets/Fruit';

function App() {
  
  const [showCounter, setShowCounter] = useState(true);

  const toggleFruits = () => {
    setShowCounter(!showCounter)
  }

  return (
    <div className="App">
      { showCounter ? <Counter /> : <Fruit/> }
      <button onClick={toggleFruits}> Toggle Fruit</button>
    </div>
  );
}

export default App;
