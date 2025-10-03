import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./bookmarkSlice";
import darkModeReducer from "./darkModeSlice";

export const store = configureStore({
  reducer: {
    bookmarks: bookmarkReducer,
    darkMode: darkModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;