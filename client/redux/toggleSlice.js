import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  client: { flag: 0, deleteId: 0 },
};

export const toggleSlice = createSlice({
  name: 'toggleAction',
  initialState,
  reducers: {
    addAction: (state) => {
      state.client.flag = 1;
    },
    updateAction: (state) => {
      state.client.flag = 2;
    },
    resetAction: (state) => {
      state.client.flag = 0;
    },
    successAction: (state) => {
      state.client.flag = 3;
    }
   
  },
});

export const { addAction, updateAction, resetAction, successAction } = toggleSlice.actions;

export default toggleSlice.reducer;
