import React from 'react';
import { useSelector } from 'react-redux';
import '../common/GlobalStyles.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Books = () => {
    const catalog = useSelector((state) => state.library.books);
    
    const bookList = catalog.map((d) =>
        <Card className="Books" variant="outlined" >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {d.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Checkout</Button>
            </CardActions>
        </Card>
    );

    return (
        <>
            {bookList}
        </>
    );
}

export default Books;
