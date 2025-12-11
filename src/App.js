import './App.css';
import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Grid, createTheme, ThemeProvider, Box } from "@mui/material";
import React, { useState } from 'react';
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
  },
  palette: {
    primary: {
      main: '#D7C7F4',
      light: '#FAF7FF',
      dark: '#9785BA',
    }
  },
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    //headings
    h5: {
      color: 'black',
      fontWeight: 500,
      lineHeight: '100%',
    },

    //buttons
    button: {
      fontSize: 19,
      fontStyle: 'Bold',
      textTransform: 'none',
      lineHeight: "100%", color: "black", fontFamily: "Ubuntu", fontWeight: "700"
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#D7C7F4',
          textTransform: "none",
          borderRadius: "8px",
        },
      },
    },
  }
});

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [chat, setChat] = useState([])

  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Grid container sx={{ height: "100vh" }}>
          <Grid size={{ xs: 0, md: 2 }} sx={{ overflow: "hidden" }}>
            <Box sx={{ width: "100%", height: "100%" }}> <Sidebar clearChat={() => setChat([])} /></Box>
          </Grid>

          <Grid size={{ xs: 12, md: 10 }}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <Outlet context={{ chat: chat, setChat: setChat }} />
            </Box>
          </Grid>
        </Grid>
      </>
    </ThemeProvider>
  );
}

export default App;
