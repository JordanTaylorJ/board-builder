import React, {useState} from "react";

const Selector = ({ step, handleAddBoard }) => {

  const [newBoard, setNewBoard] = useState({});

  const handleChange = (part) => {
      setNewBoard({...newBoard, part})
      console.log("from selector", newBoard)
  }
  
    return (
      <div>
        <form key={step.id}> 
          <select 
            name="deck"
            aria-label='deck'
          > 
            {step.parts.map((part) =>
              <option key={part} value={part}>{part}</option>
            )}
          Select One</select>
        </form>
      </div>
    );
}

export default Selector;
