import React from "react";

const Selector = ({ step, handleAddBoard, handleChange }) => {

  

    return (
        <form key={step.id}> 
          <select 
            value={step.parts.value}
            onChange={handleChange}
            name="parts"
          > Select One
            {step.parts.map((part) =>
              <option key={part} name={step.name} value={part} >{part} </option>
            )}
          </select>
        </form>
    );
}

export default Selector;
