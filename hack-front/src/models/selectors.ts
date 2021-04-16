import { ReduxState } from 'models';

export const selectCurrentNav = (state: ReduxState) => state.nav;

export const selectCurrentNotif = (state: ReduxState) => state.notification;
