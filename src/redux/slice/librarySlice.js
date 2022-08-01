import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books:
  [
    {
      title: "Title1",
      isbn: "1234567890",
      desc: "A non-fiction biography.",
    },
    {
      title: "Title2",
      isbn: "0123456789",
      desc: "A fiction book.",
    },
    {
      title: "Title3",
      isbn: "9876543210",
      desc: "A fantasy book.",
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
