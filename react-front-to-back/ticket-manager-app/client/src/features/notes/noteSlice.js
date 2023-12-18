import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import noteService from './noteService';
import { extractErrorMessage } from '../../utils/errorHandler';
import { THUNK_TYPE } from '../../utils/constant';

const initialState = {
  notes: null,
};

// Get ticket notes
export const getNotes = createAsyncThunk(
  THUNK_TYPE.GET_NOTES,
  async (ticketId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken;
      return await noteService.getNotes(ticketId, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

// Create ticket note
export const createNote = createAsyncThunk(
  THUNK_TYPE.CREATE_NOTE,
  async ({ noteText, ticketId }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken;
      return await noteService.createNote(noteText, ticketId, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotes.pending, (state) => {
        state.notes = null;
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.notes = action.payload;
      })
      .addCase(createNote.fulfilled, (state, action) => {
        state.notes.push(action.payload);
      });
  },
});

export const { reset } = noteSlice.actions;
export default noteSlice.reducer;
