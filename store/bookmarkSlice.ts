import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookmarkState {
  ids: number[];
}

const initialState: BookmarkState = {
  ids: [],
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    toggleBookmark: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((item) => item !== id);
      } else {
        state.ids.push(id);
      }
      // ذخیره در لوکال استوریج
      localStorage.setItem("bookmarks", JSON.stringify(state.ids));
    },
    loadBookmarks: (state, action: PayloadAction<number[]>) => {
      state.ids = action.payload;
    },
  },
});

export const { toggleBookmark, loadBookmarks } = bookmarkSlice.actions;

export const selectBookmarks = (state: { bookmarks: BookmarkState }) => state.bookmarks.ids;

export default bookmarkSlice.reducer;