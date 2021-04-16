import { configureStore } from '@reduxjs/toolkit';
import reducer from 'models/reducer';

export const store = configureStore({
  reducer,
});

export type ReduxState = ReturnType<typeof store.getState>;

export * from 'models/reducer';
