import React from 'react';
import '../common/GlobalStyles.css';
import Box from '@mui/material/Box';
import SearchBox from './SearchBox';
import Books from './Books';

const Main = () => {
  return (
    <>
      <Box className='Main'>
          <SearchBox />
          <Books />
      </Box>
    </>
  );
}

export default Main;
