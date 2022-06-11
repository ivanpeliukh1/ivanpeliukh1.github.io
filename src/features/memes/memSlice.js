import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMemes, fetchHotMemes, postUpvote, postDownvote, postHotUpvote, postHotDownvote, addMem } from './memAPI';

const initialState = {
  memes: [],
};

export const dataAsync = createAsyncThunk(
  'memes/fetchMemes',
  async () => {
    const response = await fetchMemes();
    return response.data;
  }
);

export const dataAsyncHot = createAsyncThunk(
  'memes/fetchHotMemes',
  async () => {
    const response = await fetchHotMemes();
    return response.data;
  }
);

export const dataUpvote = createAsyncThunk(
  'memes/postUpvote',
  async (id) => {
    const response = await postUpvote(id);
    return response.data;
  }
);

export const dataDownvote = createAsyncThunk(
  'memes/postUpvote',
  async (id) => {
    const response = await postDownvote(id);
    return response.data;
  }
);

export const dataHotUpvote = createAsyncThunk(
  'memes/postUpvote',
  async (id) => {
    const response = await postHotUpvote(id);
    return response.data;
  }
);

export const dataHotDownvote = createAsyncThunk(
  'memes/postUpvote',
  async (id) => {
    const response = await postHotDownvote(id);
    return response.data;
  }
);

export const asyncAddMem = createAsyncThunk(
  'memes/addMem',
  async (data) => {
    const response = await addMem(data);
    return response.data;
  }
);

export const memSlice = createSlice({
  name: 'memes',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(dataAsync.fulfilled, (state, action) => {
        state.memes = action.payload;
      })
      .addCase(dataAsyncHot.fulfilled, (state, action) => {
        state.memes = action.payload;
      })
      .addCase(dataUpvote.fulfilled, (state, action) => {
        state.memes = action.payload
      })
      .addCase(asyncAddMem.fulfilled, (state, action) => {
        state.memes = action.payload
      })
  },
});

export const selectMemes = (state) => state.memList.memes;

export default memSlice.reducer;
