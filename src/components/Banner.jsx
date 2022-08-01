import React from 'react';

import '../GlobalStyles.css';
import { Box } from '@mui/system';
import logo from './unt_logo.png';

const Banner = () => {
  return (
    <Box className='Banner' component="span">
      <img src={ logo } height = '100px' align='left'/>
    </Box>
  );
}

export default Banner;
