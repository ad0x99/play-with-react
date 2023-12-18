import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { THUNK_TYPE } from '../../utils/constant';
import { authService } from './authService';
import { extractErrorMessage } from '../../utils/errorHandler';

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isLoading: false,
};

// Register new user
export const register = createAsyncThunk(
  THUNK_TYPE.REGISTER,
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

// Login user
export const login = createAsyncThunk(
  THUNK_TYPE.LOGIN,
  async (user, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

// Logout user
export const logout = createAsyncThunk(
  THUNK_TYPE.LOGOUT,
  async (user, thunkAPI) => {
    await authService.logout();
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
