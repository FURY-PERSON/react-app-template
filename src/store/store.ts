import { combineReducers } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from '@slices/userApiSlice';

import appSlice from './slices/appSlice';

const rootReducer = combineReducers({
  app: appSlice,
  [userApi.reducerPath]: userApi.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApi.middleware);
  }
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
