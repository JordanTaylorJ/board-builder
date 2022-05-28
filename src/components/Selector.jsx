import React, {useState} from "react";

const Selector = ({ parts }) => {

  const [newBoard, setNewBoard] = useState({
    deck: "",
    trucks: "",
    wheels: "",
    risers: "",
    griptape: ""
  });

  const [checked, setChecked] = useState(
    new Array(parts.length).fill(false)
  );

  const handleChange = (position, part) => {
      const updateCheckedState = position === part ? !checked : checked
      setChecked(updateCheckedState)
    //setNewBoard({...newBoard, [e.target.name]: e.target.value})
    //console.log("from selector", newBoard)
  }
  
    return (
      <div>
        {parts.map((part) =>
        <label key={part}>
          <input type="checkbox" checked={checked[part.index]} onChange={() => handleChange(part.index)}/>
          {part}
        </label>
        )}
      </div>
    );
}

export default Selector;
