import './App.css';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box component="span" sx={{ p: 2, border: '1px solid white', marginX: 0}}>
          <Button>Save</Button>
        </Box>
        <p>testing</p>
      </header>
    </div>
  );
}

export default App;
