import { createSlice } from "@reduxjs/toolkit";

const loadInitialState = () => {
  try {
    const saved = localStorage.getItem("movie_watchlists");
    if (saved) {
      const data = JSON.parse(saved);
      if (Array.isArray(data)) {
        return { watchlistItems: data, isError: null, isLoading: false };
      }
    }
  } catch (error) {
    console.error("failed to load watchlists", error);
  }
  return { watchlistItems: [], isError: null, isLoading: false };
};

const initialState = loadInitialState();

const watchlistSlice = createSlice({
  name: "watchlists",
  initialState,
  reducers: {
    addToWatchlists: (state, { payload }) => {
      const existingItem = state.watchlistItems.find(
        (item) => item.id === payload.id,
      );
      if (existingItem) return;
      state.watchlistItems.push(payload);
      updateLocalStorage(state.watchlistItems);
    },
  },
});

const updateLocalStorage = (watchlistItems) => {
  localStorage.setItem("movie_watchlists", JSON.stringify(watchlistItems));
};

export const selectWatchlistItems = (state) => state.watchlists.watchlistItems;
export const selectIsInWatchlist = (state, movieId) => {
  state.watchlists.watchlistItems.some((item) => item.id === movieId);
};

export const { addToWatchlists } = watchlistSlice.actions;
export default watchlistSlice.reducer;
