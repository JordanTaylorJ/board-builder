import React, {useState, useEffect} from  "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import BoardBuilder from "./components/BoardBuilder";
import Results from "./components/Results"
import {BrowserRouter, Route} from "react-router-dom";

function App() {

  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/completeboards")
      .then((response) => response.json())
      .then((completeBoards) => setBoards(completeBoards))
      console.log([boards]);
  }, []);

  function handleAddBoard(newBoard){
    setBoards([...boards, newBoard])
  }

  return (
    <BrowserRouter className="App">
      <Navbar />
        <Route path="/BoardBuilder">
          <BoardBuilder boards={boards} onAddBoard={handleAddBoard} />
        </Route>  
        <Route exact path= "/">
          <Home />
        </Route>
        <Route path="/Results">
          <Results/>
        </Route>
    </BrowserRouter>
  );
}

export default App;
