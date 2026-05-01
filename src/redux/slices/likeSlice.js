import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedItems: [],
};

const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    addToLikes: (state, { payload }) => {
      const existingItem = state.likedItems.find(
        (item) => item.id === payload.id,
      );
      if (existingItem) return;
      state.likedItems.push(payload);
    },
    removeFromLikes: (state, { payload }) => {
      const existingItem = state.likedItems.some((item) => item.id === payload);
      if (!existingItem) return;
      state.likedItems = state.likedItems.filter((item) => item.id !== payload);
    },
  },
});

export const selectLikedItems = (state) => state.likes.likedItems;
export const selectIsInLikedItems = (state, movieId) => {
  return state.likes.likedItems.some((item) => item.id === movieId);
};

export const { addToLikes, removeFromLikes } = likeSlice.actions;
export default likeSlice.reducer;
