import { ThemeProvider } from '@mui/material/styles'
import React from "react";
import DebitCardFront from "./components/DebitCard/DebitCardFront";
import DebitCardBack from './components/DebitCard/DebitCardBack';
import { theme } from "./styles/GlobalTheming";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DebitCardFront />
        <DebitCardBack/>
      </ThemeProvider>
    </>
  );
}

export default App;
