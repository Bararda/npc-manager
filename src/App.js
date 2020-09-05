import React from 'react';
import './App.css';
import NpcManager from './components/npc-manager/npc-manager';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './core/nav-bar/nav-bar';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='main-content'>
        <NpcManager></NpcManager>
      </div>
    </div>
  );
}

export default App;
