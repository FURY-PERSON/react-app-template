import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  a: 'a'
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setApp(state, action: PayloadAction<{ a: string }>) {
      return action.payload;
    }
  }
});

export default appSlice.reducer;
export const { setApp } = appSlice.actions;
