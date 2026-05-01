import { configureStore } from "@reduxjs/toolkit";

import WatchlistReducer from "../slices/watchlistSlice";
import LikesReducer from "../slices/likeSlice";

export default configureStore({
  reducer: {
    watchlists: WatchlistReducer,
    likes: LikesReducer,
  },
});
