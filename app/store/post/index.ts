// redux
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// api
import { getAll } from 'utils/services/api/post';
// types
import { IInstagramPostProps } from 'components/InstagramPost';

// action types
const GET_LIST = 'instaCopy/posts/getList';

export type TPaging = { next: string };

export const getAllAction: any = createAsyncThunk(
  GET_LIST,
  async (options?: { paging: TPaging }) => {
    const response = await getAll(options);
    return response?.data;
  },
);

interface IInitialState {
  posts: IInstagramPostProps[];
  meta: {
    isLoading: boolean;
    error: {} | null;
    paging: { next: string } | null;
  };
}

const initialState: IInitialState = {
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
    [getAllAction.fulfilled]: (
      state,
      { payload }: { payload: { data: []; paging: { next: string } } },
    ) => {
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
