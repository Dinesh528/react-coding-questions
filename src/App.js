import React, { useState } from 'react';
import './App.css';
import StopWatch from './components/stop watch/StopWatch';
import ComponentCleanUp from './components/CleanUp.js';
import Parent from './components/ChildToParent/Parent.js';
import TypeAhead from './components/TypeAhead/TypeAhead.jsx';

function App() {


  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

      {/* <StopWatch/>
     <ComponentCleanUp/> */}
      {/* <Parent/> */}
      <TypeAhead />
    </div>
  );
}

export default App;
