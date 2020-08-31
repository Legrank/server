import React from 'react'
import { Game } from './features/game/game'
import {Pixiroot} from './features/pixiroot/pixiroot'
import './App.css';

function App() {
  return (
    <div className="App">
        <Pixiroot />
        <Game />
    </div>
  );
}

export default App;
