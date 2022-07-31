import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    books: [
        {
            title: "Title",
            isbn: "1234567890",
            desc: "A non-fiction biography.",
        },
    ],
};

const librarySlice = createSlice({
    name: "librarySlice",
    initialState,
    reducers: {
        getBooks(state) {
            state.library = initialState.books;
        },
        setBooks(state, action) {
            state.library = action.payload;
        }
    },
});

export const { getBooks, setBooks } = librarySlice.actions;
export default librarySlice.reducer;