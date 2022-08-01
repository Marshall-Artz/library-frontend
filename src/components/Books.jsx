import React from 'react';
import { useSelector } from 'react-redux';
import '../GlobalStyles.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Books = () => {
    const catalog = useSelector((state) => state.library.books);
    
    const bookList = catalog.map((d) =>
        <Card sx={{ minWidth: 275, marginBottom: '15px'}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {d.title}
                </Typography>
            </CardContent>
        </Card>
    );

    return (
        <>
            {bookList}
        </>
    );
}

export default Books;
