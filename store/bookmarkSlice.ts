import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// تعریف ساختار یک بوکمارک
interface BookmarkItem {
  id: number;
  name: string;
  imageUrl: string;
}

interface BookmarkState {
  items: BookmarkItem[];
}

const initialState: BookmarkState = {
  items: [],
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    toggleBookmark: (state, action: PayloadAction<BookmarkItem>) => {
      const item = action.payload;
      const existingIndex = state.items.findIndex(bookmark => bookmark.id === item.id);

      if (existingIndex >= 0) {
        // حذف از بوکمارک‌ها
        state.items.splice(existingIndex, 1);
      } else {
        // اضافه کردن به بوکمارک‌ها
        state.items.push(item);
      }
      // ذخیره در لوکال استوریج
      localStorage.setItem("bookmarks", JSON.stringify(state.items));
    },
    loadBookmarks: (state, action: PayloadAction<BookmarkItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const { toggleBookmark, loadBookmarks } = bookmarkSlice.actions;

// انتخاب همه آیتم‌های بوکمارک
export const selectBookmarks = (state: { bookmarks: BookmarkState }) => state.bookmarks.items;

export default bookmarkSlice.reducer;