import React,{useState} from 'react';
import './App.css';
import StopWatch from './components/stop watch/StopWatch';
import ComponentCleanUp from './components/CleanUp.js';
import Parent from './components/ChildToParent/Parent.js';

function App() {


  return (
    <div className="App">
      
     {/* <StopWatch/>
     <ComponentCleanUp/> */}
    <Parent/>
    </div>
  );
}

export default App;
