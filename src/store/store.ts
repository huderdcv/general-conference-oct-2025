import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { challengesReducer } from './challenges';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    challenges: challengesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
