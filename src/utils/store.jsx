import { configureStore } from "@reduxjs/toolkit";
import linkReducer from './linkSlice';
import formReducer from './formSlice'
const store=configureStore({
    reducer:{
        links:linkReducer,
        forms:formReducer
    }
})
export default store