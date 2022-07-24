import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Main from './components/Main';
import { Box } from '@mui/system';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner/>
        <Main/>
        <Box sx={{p: 2, border: '1px solid white', margin: 2}}>
          
        </Box>
      </header>
    </div>
  );
}

export default App;
