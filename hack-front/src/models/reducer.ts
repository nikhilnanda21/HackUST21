import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NotificationPayload } from './types';

const initialState = {
  nav: null as number | null,
  notification: null as NotificationPayload | null,
};

const reduxSlice = createSlice({
  name: 'redux',
  initialState,
  reducers: {
    setNavigation(state, action: PayloadAction<number | null>) {
      state.nav = action.payload;
    },
    setNotification(state, action: PayloadAction<NotificationPayload | null>) {
      state.notification = action.payload;
    },
  },
});

export const { setNavigation, setNotification } = reduxSlice.actions;

export default reduxSlice.reducer;
