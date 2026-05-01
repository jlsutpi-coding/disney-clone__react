import { createSlice } from "@reduxjs/toolkit";

const loadInitialState = () => {
  try {
    const data = localStorage.getItem("movie_likes");
    if (!data) {
      return {
        likedItems: [],
      };
    }
    return { likedItems: JSON.parse(data) };
  } catch (error) {
    console.error(error);
  }
  return { likedItems: [] };
};

const initialState = loadInitialState();

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
      uploadToLocalStorage(state.likedItems);
    },
    removeFromLikes: (state, { payload }) => {
      const existingItem = state.likedItems.some((item) => item.id === payload);
      if (!existingItem) return;
      state.likedItems = state.likedItems.filter((item) => item.id !== payload);
      uploadToLocalStorage(state.likedItems);
    },
  },
});

export const selectLikedItems = (state) => state.likes.likedItems;
export const selectIsInLikedItems = (state, movieId) => {
  return state.likes.likedItems.some((item) => item.id === movieId);
};

const uploadToLocalStorage = (likedItems) => {
  localStorage.setItem("movie_likes", JSON.stringify(likedItems));
};

export const { addToLikes, removeFromLikes } = likeSlice.actions;
export default likeSlice.reducer;
