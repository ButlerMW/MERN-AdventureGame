import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Chat from './components/Chat'
import Menu from './views/Menu'
import Maze1 from './views/Maze1'
import Maze2 from './views/Maze2'
import Maze3 from './views/Maze3'
import Maze4 from './views/Maze4'
import Maze5 from './views/Maze5'
import Maze6 from './views/Maze6'
import Maze7 from './views/Maze7'
import Maze8 from './views/Maze8'
import MazeDoor from './views/MazeDoor'
import MazeCenter from './views/MazeCenter';
import MazeCase from './views/MazeCase';
import DeadEnd from './views/DeadEnd'
import logo from './logo.svg';
import './App.css';
import { Container } from '@material-ui/core'
import { Router } from '@reach/router'
import ToolBar from './components/ToolBar'

function App() {
  const [ socket ] = useState(io(":8000"));
  const [ file, setFile ] = useState(null);
  

  const [ inventory, setInventory ] = useState([]);
  const [ lemonObtained, setLemonObtained ] = useState(false);
  const [ adventure1Done, setAdventure1Done ] = useState(false); 

  const addItem = item => {
    inventory.push(item);
    console.log("bruh")
  }
  
  useEffect(() => {
    console.log("Is this running??");
    socket.on("Welcome", data => console.log(data));
  }, []);

  return (
    <div className="App">
      <Router>
        <Menu path="/" adventure1Done={adventure1Done} />
        <Maze1 path="/maze" />
        <Maze2 path="/maze/2" />
        <Maze3 path="/maze/3" />
        <Maze4 path="/maze/4" />
        <Maze5 path="/maze/5" />
        <Maze6 path="/maze/6" />
        <Maze7 path="/maze/7" />
        <Maze8 path="/maze/8" addItem={addItem} lemonObtained={lemonObtained} setLemonObtained={setLemonObtained} />
        <MazeDoor path="/maze/door" />
        <MazeCenter path="/maze/center" inventory={inventory} />
        <MazeCase path="/maze/gem_case" addItem={addItem} adventure1Done={adventure1Done} setAdventure1Done={setAdventure1Done} />
        <DeadEnd path="/dead_end" />
      </Router>
      <ToolBar inventory={inventory} />
      {/* <Chat socket={socket} /> */}
    </div>
  );
}

export default App;
