import { configureStore } from '@reduxjs/toolkit';
import CrudReducer from './reducer.js';
import toggleReducer from './toggleSlice';
export const store = configureStore({
  reducer: {
    toggleAction: toggleReducer,
    app: CrudReducer,
  },
  
});
