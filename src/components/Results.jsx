import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Results = ({boards}) => {

  return (
    <div> 
      <h1>Results</h1>
        {boards.map((board) => 
          <Card sx={{ minWidth: 275 }} key={board.id}>
            <CardContent>
              <Typography variant="h5" component="div" color="text.secondary">
                Board {board.id}
              </Typography>
              <Typography variant="body2">
                {board.parts.map((part) =>
                  <li key={part}> 
                    {part}
                  </li>
                )}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Delete</Button>
            </CardActions>
          </Card>
        )}
        
    </div>
  );
}

export default Results;

