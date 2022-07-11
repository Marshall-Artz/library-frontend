import { Box } from '@mui/system';
import { Button } from '@mui/material';

const Banner = () => {
  return (
    <Box component="span" sx={{ p: 2, border: '1px solid white', marginX: 0}}>
        <Button>Save</Button>
    </Box>
  );
}

export default Banner;
