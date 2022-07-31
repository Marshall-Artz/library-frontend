import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books:
  [
    {
      title: "Title",
      isbn: "1234567890",
      desc: "A non-fiction biography.",
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
