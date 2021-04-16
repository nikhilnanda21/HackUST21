import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  nav: null as number | null,
};

const reduxSlice = createSlice({
  name: 'redux',
  initialState,
  reducers: {
    setNavigation(state, action: PayloadAction<number | null>) {
      state.nav = action.payload;
    },
  },
});

export const { setNavigation } = reduxSlice.actions;

export default reduxSlice.reducer;
