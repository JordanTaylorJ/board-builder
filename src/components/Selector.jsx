import React, {useState} from "react";

const Selector = ({ parts }) => {

  const [newBoard, setNewBoard] = useState([]);

  const [checked, setChecked] = useState(
    new Array(parts.length).fill(false)
  );

  const handleChange = (position, part) => {
      const updateCheckedState = position === part ? !checked : checked
      setChecked(updateCheckedState)
      setNewBoard({...newBoard, part})
      console.log("from selector", newBoard)
      console.log(checked)
  }
  
    return (
      <div>
        {parts.map((part) =>
        <label key={part}>
          <input type="checkbox" checked={checked[part.index]} onChange={() => handleChange(part.index, part)}/>
          {part}
        </label>
        )}
      </div>
    );
}

export default Selector;
