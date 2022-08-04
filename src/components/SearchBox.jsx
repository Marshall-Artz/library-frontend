import React from 'react';
import '../common/GlobalStyles.css';
import { Box, TextField } from '@mui/material';

const SearchBox = () => {
  return (
    <>
      <Box className="SearchBox" >
        <TextField id="Search" label="Outlined" variant="outlined" sx={{justifyContent: 'flex-end'}}/>
      </Box>
    </>
  );
}

export default SearchBox;
