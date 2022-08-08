import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckedOut, setReturned } from '../redux/slice/librarySlice';
import '../common/GlobalStyles.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Books = () => {
    const catalog = useSelector((state) => state.library.books);
    const dispatch = useDispatch();

    function handleClick(element) {
        const parsedElement = JSON.parse(element);
        if (parsedElement.checkedOut === "Checkout") {
            dispatch(setCheckedOut({
                type: 'BOOK_CHECKOUT',
                payload: parsedElement.isbn,
            }));
        } else {
            dispatch(setReturned({
                type: 'BOOK_RETURN',
                payload: parsedElement.isbn,
            }));
        }
    }
    
    const bookList = catalog.map((element) =>
        <Card key={element.title} className="Books" variant="outlined" >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                    {element.title},  {element.author}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {element.desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => handleClick(JSON.stringify(element))}> {element.checkedOut} </Button>
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
