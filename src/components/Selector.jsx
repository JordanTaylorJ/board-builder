import React, {useState} from "react";

const Selector = ({ step, handleAddBoard }) => {

  const [newBoard, setNewBoard] = useState([]);



  const handleChange = (e) => {
      console.log(e.target.value)
      setNewBoard(...newBoard, e.target.value )
      console.log("from selector", newBoard)
  }
    console.log("outside", newBoard)
    return (
      <div>
        <form key={step.id} onSubmit={(e) => handleAddBoard(e)}> 
          <select 
            value={step.parts.value}
            onChange={handleChange}
            name="parts"
          > 
            {step.parts.map((part) =>
              <option key={part} value={part} >{part} </option>
            )}
          Select One</select>
        </form>
      </div>
    );
}

export default Selector;
