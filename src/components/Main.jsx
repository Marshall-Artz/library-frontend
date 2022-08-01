import React from 'react';
import '../GlobalStyles.css';
import Box from '@mui/material/Box';
import Books from './Books';

const Main = () => {
  return (
    <>
      <Box className='Main'>
          <Books />
      </Box>
    </>
  );
}

export default Main;
