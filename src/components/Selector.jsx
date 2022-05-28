
/*import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
*/

import React, {useState} from "react";
//import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Selector = ({ parts, boards, steps }) => {

  const [newBoard, setNewBoard] = useState({
    deck: "",
    trucks: "",
    wheels: "",
    risers: "",
    griptape: ""
  });

  const handleChange = (e) => {
    e.preventDefault()
    setNewBoard({...newBoard, [e.target.name]: e.target.value})
    console.log("from selector", newBoard)
  }


    return (
      <FormGroup>
        {parts.map((part) =>
        <FormControlLabel control={<Checkbox />} key={part} label={part} />
        )}
      </FormGroup>
    );
  }
  

export default Selector;


  {/*
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select One</InputLabel>
        {parts.map((part) => 
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="part"
          value={part}
          onChange={handleChange}
        >
          
            <MenuItem key={part} value={part} >{part}</MenuItem>
          
        </Select>
        )}
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

*/}