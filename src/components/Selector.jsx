import React, {useState} from "react";

const Selector = ({ step, handleChange }) => {
  
  const [part, setPart] = useState('');

  const handleChangePart = (e) => {
    setPart(e.target.value)
    handleChange(e)
  }

    return (
      <select 
        value={part}
        onChange={handleChangePart}
        name={step.name}
      > Select One
        {step.parts.map((part) =>
          <option key={part} value={part}>{part} </option>
        )}
      </select>
    );
}

export default Selector;
