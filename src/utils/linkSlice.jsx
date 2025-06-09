import { createSlice } from "@reduxjs/toolkit";

const linkSlice=createSlice({
    name:"links",
    initialState:{
        linkss:[],
    },
    reducers:{
        addlink:(state,action)=>{
            state.linkss.push(action.payload);
        }
    }
})
export const {addlink}=linkSlice.actions;
export default linkSlice.reducer;