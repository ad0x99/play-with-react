import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ticketService from './ticketService';
import { THUNK_TYPE } from '../../utils/constant';

const initialState = {
  tickets: [],
  ticket: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create new ticket
export const createTicket = createAsyncThunk(
  THUNK_TYPE.CREATE_TICKET,
  async (ticketData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken;

      return await ticketService.createTicket(ticketData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.errorMessage) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getTickets = createAsyncThunk(
  THUNK_TYPE.GET_TICKETS,
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken;

      return await ticketService.getTickets(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.errorMessage) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user ticket
export const getTicket = createAsyncThunk(
  THUNK_TYPE.GET_TICKET,
  async (ticketId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken;
      return await ticketService.getTicket(ticketId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.errorMessage) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Close ticket
export const closeTicket = createAsyncThunk(
  THUNK_TYPE.CLOSE_TICKET,
  async (ticketId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken;
      return await ticketService.closeTicket(ticketId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.errorMessage) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTicket.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTickets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tickets = action.payload;
      })
      .addCase(getTickets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ticket = action.payload;
      })
      .addCase(getTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = ticketSlice.actions;
export default ticketSlice.reducer;
