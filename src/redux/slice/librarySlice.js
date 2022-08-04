import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books:
  [
    {
      title: "Lord of the Rings",
      author: "J.R.R. Tolkien",
      desc: "A fantasy fiction book.",
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      desc: "A fantasy fiction book about wizards.",
    },
    {
      title: "The Lion, the Witch, and the Wardrobe",
      author: "C.S. Lewis",
      desc: "A fantasy book about a magical wardrobe.",
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
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = librarySlice.actions
export default librarySlice
