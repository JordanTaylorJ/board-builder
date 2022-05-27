import React, {useState} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Selector = ({ parts }) => {

  const [newBoard, setNewBoard] = useState({
    deck: "",
    trucks: "",
    wheels: "",
    risers: "",
    griptape: ""
  });

  const handleChange = (e) => {
    setNewBoard({...newBoard, [e.target.name]: e.target.value})
    console.log(newBoard)
  }
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select One</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={part}
          label="part"
          onChange={handleChange}
        >
          {parts.map((part) => 
            <MenuItem key={part} >{part}</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}


export default Selector;



/*
import React, {useState} from "react";

function Selector() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  return (
    <form className="NewItem">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default Selector;

*/