// redux
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// api
import { getAll } from 'utils/services/api/post';

// action types
const GET_LIST = 'instaCopy/posts/getList';

export const getAllAction: any = createAsyncThunk(GET_LIST, async (options) => {
  const response = await getAll(options);
  return response?.data;
});

const initialState = {
  posts: [],
  meta: { isLoading: false, error: null, paging: null },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllAction.pending]: (state, { meta }) => {
      state.meta.isLoading = true;
      state.meta.paging = meta.arg?.paging;
    },
    [getAllAction.fulfilled]: (state, { payload }) => {
      if (state.meta.paging) {
        state.posts.push(...payload?.data);
      } else {
        state.posts = payload?.data;
      }
      state.meta.isLoading = false;
      state.meta.paging = payload?.paging;
    },
    [getAllAction.rejected]: (state, { payload }) => {
      state.meta.isLoading = false;
      state.meta.error = payload;
    },
  },
});

export default postsSlice.reducer;
