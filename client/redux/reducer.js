import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  client: { deleteId: null, updateId: null },
};

export const ReducerSlice = createSlice({
  name: 'crudapp',
  initialState,
  reducers: {
    deleteAction: (state, action) => {
      state.client.deleteId = action.payload;
    },
    resetDeleteId: (state) => {
      state.client.deleteId = null
    },
    updateFunction: (state, action) => {
      state.client.updateId = action.payload;
    }
  },
});

export const { deleteAction, resetDeleteId, updateFunction } = ReducerSlice.actions;

export default ReducerSlice.reducer;
