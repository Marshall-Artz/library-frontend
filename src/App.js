import './App.css';
import { Box } from '@mui/system';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>testing</p>
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.light'
          }}
        />
      </header>
    </div>
  );
}

export default App;
