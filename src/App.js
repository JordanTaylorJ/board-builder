import React from  "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import BoardBuilder from "./components/BoardBuilder";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <BoardBuilder />  
    </div>
  );
}

export default App;
