import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Coords } from 'google-map-react';

import { NotificationPayload } from './types';

const initialState = {
  nav: null as number | null,
  notification: null as NotificationPayload | null,
  center: {
    lat: 22.3193,
    lng: 114.1694,
  } as Coords,
  zoom: 11,
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
    setMapCenter(state, action: PayloadAction<Coords>) {
      state.center = action.payload;
    },
    setMapZoom(state, action: PayloadAction<number>) {
      state.zoom = action.payload;
    },
  },
});

export const { setNavigation, setNotification, setMapCenter, setMapZoom } = reduxSlice.actions;

export default reduxSlice.reducer;
