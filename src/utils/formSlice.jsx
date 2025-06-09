import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: 'forms',
  initialState: false, 
  reducers: {
    toggleForm(state, action) {
      return !state; 
    }
  }
});

export const { toggleForm } = formSlice.actions;
export default formSlice.reducer;
