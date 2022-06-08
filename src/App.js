import React, {useState, useEffect} from  "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import BoardBuilder from "./components/BoardBuilder";
import Results from "./components/Results"
import {BrowserRouter, Route} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#928f66',
    },
    secondary: {
      main: '#876d6b',
      dark: '#694340', 
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  components: {
    MuiButton: {
          color: "green"
    }
  }
});


function App() {

  const [boards, setBoards] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/completeboards")
    .then(r => r.json())
    .then((data) => setBoards(data))
  }, []);

  const handleAddBoard = (newBoard) => {
    console.log("from app", newBoard)
    fetch("http://localhost:3001/completeboards", {
      method: 'POST',
      headers: { 
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(newBoard),
    })
    .then(r => r.json())
    .then((data) => setBoards(data))
  }


  return (
    <ThemeProvider theme={theme}> 
    <BrowserRouter className="App">
      <Navbar />
        <Route path="/BoardBuilder">
          <BoardBuilder handleAddBoard={handleAddBoard} />
        </Route>  
        <Route exact path= "/">
          <Home />
        </Route>
        <Route path="/Results">
            <Results boards={boards}/>
        </Route>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
