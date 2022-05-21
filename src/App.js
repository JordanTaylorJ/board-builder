import React from  "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import BoardBuilder from "./components/BoardBuilder";
import Results from "./components/Results"
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
        <Route path="/BoardBuilder">
          <BoardBuilder/>
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
