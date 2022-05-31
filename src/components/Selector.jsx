import React, {useState} from "react";

const Selector = ({ parts, index }) => {

  const [newBoard, setNewBoard] = useState([]);

  const [checked, setChecked] = useState(
    new Array(parts.length).fill(false)
  );

  const handleChange = (part) => {
    const partIndex = parts.indexOf(part)
      const updateChecked = checked.map((part, index) =>
        partIndex === index ? !part : part
      )
      setChecked(updateChecked)
      setNewBoard({...newBoard, part})
      console.log("from selector", newBoard)
      console.log(checked)
  }
  
    return (
      <div>
        {parts.map((part) =>
        <label key={part}>
          <input type="checkbox" checked={checked[index]} onChange={() => handleChange(part)}/>
          {part}
        </label>
        )}
      </div>
    );
}

export default Selector;
