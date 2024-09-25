import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: null | { email: string };
  token: null | string;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string, token: string }>) => {
      state.user = { email: action.payload.email };
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
