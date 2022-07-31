import librarySlice from '../redux/slice/librarySlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        library: librarySlice.reducer
    }
});
//sageMiddleWare.run(rootSaga);

export default store;