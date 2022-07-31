import counterSlice from '../redux/slice/counterSlice';
import { configureStore } from '@reduxjs/toolkit';
  
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});
//sageMiddleWare.run(rootSaga);

export default store;