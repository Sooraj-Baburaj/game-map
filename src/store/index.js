import { configureStore } from "@reduxjs/toolkit";
import moduleReducer from '../Slices/moduleSlice';

export const store = configureStore({
    reducer: {
        module: moduleReducer
    },
})


