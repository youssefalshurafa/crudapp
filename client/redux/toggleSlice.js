import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  client: { flag: 0, deleteId: null },
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
    deleteAction: (state, action) => {
      state.client.deleteId = action.payload;
    },
  },
});

export const { addAction, updateAction, resetAction } = toggleSlice.actions;

export default toggleSlice.reducer;
