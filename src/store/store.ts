import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tableSlice from './tableSlice'

const store = configureStore({
  reducer: combineReducers({ tableSlice }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;