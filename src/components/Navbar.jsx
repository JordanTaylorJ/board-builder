import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#928f66',
    },
    secondary: {
      light: '#b09b99',
      main: '#928f66',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});



const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" theme={theme}>
            <Container>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                </Typography>
                <Button color="inherit" component={Link} to="/BoardBuilder">
                    Build Your Board
                </Button>
                <Button color="inherit" component={Link} to="/Results">
                    Results
                </Button>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>
  );
}

export default Navbar;