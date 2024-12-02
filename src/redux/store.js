import {configureStore} from '@reduxjs/toolkit';
import todoSlice from '../slice/todo';

export const store = configureStore({
reducer : {
    todo: todoSlice.reducer,
}
})