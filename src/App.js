import './App.css';
import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Grid, createTheme, ThemeProvider, Box } from "@mui/material";
import React, {useState} from 'react';
import Sidebar from './Components/SIdebar';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
});

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Grid container  sx={{height:"100vh"}}>
          <Grid size={{ xs: 12, md: 2 }}>
            <Box sx={{border: "solid red 2px", width: "100%", height:"100%"}}> <Sidebar /></Box>
          </Grid>

          <Grid size={{ xs: 12, md: 10}}>
            <Box sx={{border: "solid blue 2px", width: "100%", height:"100%"}}>
              <Outlet />
            </Box>
          </Grid>
        </Grid>
      </>
    </ThemeProvider>
  );
}

export default App;
