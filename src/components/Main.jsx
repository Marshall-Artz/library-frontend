import React from 'react';
import { useSelector } from 'react-redux';
import '../GlobalStyles.css';
import { Box } from '@mui/system';

const Main = () => {
  const library = useSelector((state) => state.libraryRes);
  return (
    <Box className='Main'>
        <p>Title: {toString(library)}</p>
    </Box>
  );
}

export default Main;
