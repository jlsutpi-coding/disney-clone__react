import { configureStore } from "@reduxjs/toolkit";
import WatchlistReducer from "../slices/watchlistSlice";
export default configureStore({
  reducer: {
    watchlists: WatchlistReducer,
  },
});
