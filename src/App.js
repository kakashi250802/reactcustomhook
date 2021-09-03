import './App.css';
import Clock from './components/Clock';
import React, {useState} from 'react';
import NewClock from './components/NewClock/index';
import MagicBox from './components/MagicBox';


function App() {
  const [showClock,setShowClock] = useState(true);

  return (
    <div className="App">
      {showClock && <Clock />}
      <NewClock />
      <button onClick={() => setShowClock(false)}>HIDE CLOCK</button>
    <MagicBox />
     </div>
  );
}

export default App;
