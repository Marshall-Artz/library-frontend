import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books:
  [
    {
      title: "Lord of the Rings",
      author: "J.R.R. Tolkien",
      desc: "A fantasy fiction book.",
      isbn: 0,
      checkedOut: "Checkout",
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      desc: "A fantasy fiction book about wizards.",
      isbn: 1,
      checkedOut: "Checkout",
    },
    {
      title: "The Lion, the Witch, and the Wardrobe",
      author: "C.S. Lewis",
      desc: "A fantasy book about a magical wardrobe.",
      isbn: 2,
      checkedOut: "Checkout",
    },
  ]
}

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    getBooks(state) {
      state.books = state.initialState;
    },
    setCheckedOut(state, action) {
      const found = state.books.find(element => element.isbn === action.payload.payload)
      if (found !== undefined) {
        found.checkedOut = "Return";
      }
    },
    setReturned(state, action) {
      const found = state.books.find(element => element.isbn === action.payload.payload)
      if (found !== undefined) {
        found.checkedOut = "Checkout";
      }
    },
  },
})

export const { getBooks, setCheckedOut, setReturned } = librarySlice.actions
export default librarySlice
