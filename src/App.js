import React, { useState } from 'react';
import './App.css';
import StopWatch from './components/stop watch/StopWatch';
import ComponentCleanUp from './components/CleanUp.js';
import Parent from './components/ChildToParent/Parent.js';
import TypeAhead from './components/TypeAhead/TypeAhead.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
import Pagination from './components/Pagination/Pagination.js';

function App() {


  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

      {/* <StopWatch/>
     <ComponentCleanUp/> */}
      {/* <Parent/> */}
      {/* <TypeAhead /> */}
      {/* <TodoList /> */}
      <Pagination />
    </div>
  );
}

export default App;
