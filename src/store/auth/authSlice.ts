import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type Status = 'checking' | 'not-authenticated' | 'authenticated';

interface AuthState {
  status: Status;
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoUrl: string | null;
  errorMsg: string | null;
}

interface User {
  uid: string;
  email: string;
  displayName: string;
  photoUrl: string;
}

const initialState: AuthState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
  errorMsg: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<User>) => {
      state.status = 'authenticated';
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoUrl = payload.photoUrl;
      state.errorMsg = null;
    },
    logout: (
      state,
      { payload }: PayloadAction<{ errorMsg: null | string }>
    ) => {
      state.status = 'not-authenticated';
      state.errorMsg = payload.errorMsg;
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoUrl = null;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;
