import { combineReducers } from 'redux';

import { configureStore } from '@reduxjs/toolkit';

import appSlice from './slices/appSlice';

const rootReducer = combineReducers({
  app: appSlice
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
