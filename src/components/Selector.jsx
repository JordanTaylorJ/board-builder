import React, {useEffect, useState} from "react";

const Selector = ({ step, handleChange }) => {
  /*
  const [parts, setParts] = useState();

  useEffect(() => {
    setParts(step.parts)
  }, [step.parts])
  
  console.log("parts", parts)
  */
    return (
        <form key={step.parts}> 
          <select 
            onChange={handleChange}
            name={step.name}
          > Select One
            {step.parts.map((part) =>
              <option key={part} value={part}>{part} </option>
            )}
          </select>
        </form>
    );
}

export default Selector;
