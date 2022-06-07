import React from "react";

const Selector = ({ step, handleChange }) => {

  

    return (
        <form key={step.id}> 
          <select 
            value={step.parts.value}
            onChange={handleChange}
            name={step.name}
          > Select One
            {step.parts.map((part) =>
              <option key={part} value={part} >{part} </option>
            )}
          </select>
        </form>
    );
}

export default Selector;
