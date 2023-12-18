import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ticketService from './ticketService';
import { THUNK_TYPE } from '../../utils/constant';
import { extractErrorMessage } from '../../utils/errorHandler';

const initialState = {
  tickets: [],
  ticket: {},
};

// Create new ticket
export const createTicket = createAsyncThunk(
  THUNK_TYPE.CREATE_TICKET,
  async (ticketData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken;

      return await ticketService.createTicket(ticketData, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
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
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
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
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
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
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTickets.pending, (state) => {
        state.tickets = null;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.tickets = action.payload;
      })
      .addCase(getTicket.pending, (state) => {
        state.ticket = null;
      })
      .addCase(getTicket.fulfilled, (state, action) => {
        state.ticket = action.payload;
      })
      .addCase(closeTicket.fulfilled, (state, action) => {
        state.ticket = action.payload;
        state.tickets = state.tickets.map((ticket) =>
          ticket._id === action.payload._id ? action.payload : ticket
        );
      });
  },
});

export default ticketSlice.reducer;
