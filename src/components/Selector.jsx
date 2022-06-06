import React, {useState} from "react";

const Selector = ({ step, handleAddBoard, handleChange }) => {

  





    return (
        <form key={step.id} onSubmit={(e) => handleAddBoard(e)}> 
          <select 
            value={step.parts.value}
            onChange={handleChange}
            name="parts"
          > Select One
            {step.parts.map((part) =>
              <option key={part} default value={part} >{part} </option>
            )}
          </select>
        </form>
    );
}

export default Selector;
