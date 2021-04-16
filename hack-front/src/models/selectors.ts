import { ReduxState } from 'models';

export const selectCurrentNav = (state: ReduxState) => state.nav;

export const selectCurrentNotif = (state: ReduxState) => state.notification;

export const selectCurrentMapPos = (state: ReduxState) => ({
  zoom: state.zoom,
  center: {
    lat: state.center?.lat,
    lng: state.center?.lng,
  },
});

export const selectCurrentMapMarker = (state: ReduxState) => state.marker;
