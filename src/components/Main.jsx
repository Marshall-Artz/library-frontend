import React from 'react';
import { useSelector } from 'react-redux';
import '../GlobalStyles.css';
import { Box } from '@mui/system';

const Main = () => {
  const library = useSelector((state) => state.library);
  return (
    <Box className='Main'>
        <p>Title: {library.books[0].title}</p>
    </Box>
  );
}

export default Main;
