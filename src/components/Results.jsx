import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Results = ({boards, onDeleteBoard}) => {

  const handleDelete = (board) => {
    console.log(board)
    fetch(`http://localhost:3001/completeboards/${board.id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => onDeleteBoard(board))
  }

  return (
    <div> 
      <h1>Results</h1>
        {boards.map((board, idx) => 
          <Card sx={{ minWidth: 275 }} key={idx}>
            <CardContent>
              <Typography variant="h5" component="div" color="text.secondary">
                Board {board.id}
              </Typography>
              <Typography variant="body2">
                  <li> 
                    {board.deck}
                  </li>
                  <li> 
                    {board.trucks}
                  </li>
                  <li> 
                    {board.wheels}
                  </li>
                  <li> 
                    {board.risers}
                  </li>
                  <li> 
                    {board.griptape}
                  </li>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleDelete(board)}>Delete</Button>
            </CardActions>
        </Card>
      )}
    </div>
  );
}

export default Results;

