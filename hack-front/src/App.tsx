import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import BottomNavigation from 'components/BottomNavigation';
import NavSwitch from 'components/NavSwitch';
import theme from 'theme';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavSwitch />
      <BottomNavigation />
    </ThemeProvider>
  );
}

export default App;
