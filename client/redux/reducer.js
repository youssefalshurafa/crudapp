import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  client: { deleteId: null },
};

export const ReducerSlice = createSlice({
  name: 'crudapp',
  initialState,
  reducers: {
    deleteAction: (state, action) => {
      state.client.deleteId = action.payload;
    },
  },
});

export const { deleteAction } = ReducerSlice.actions;

export default ReducerSlice.reducer;
