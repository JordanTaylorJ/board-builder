import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Results = ({boards}) => {

  return (
    <div> 
      <h1 color="text.secondary.dark">Results</h1>
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

