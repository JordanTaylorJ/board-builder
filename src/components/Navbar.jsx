import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Container>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Bike Builder 
                </Typography>
                <Button color="inherit">Build A Bike</Button>
                <Button color="inherit">Results</Button>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>
  );
}

export default Navbar;