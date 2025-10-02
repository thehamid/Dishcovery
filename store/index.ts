import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./bookmarkSlice";
import darkModeReducer from "./darkModeSlice"; // فرض می‌کنیم این فایل وجود دارد

// بارگذاری اولیه بوکمارک‌ها از لوکال استوریج
const loadBookmarkState = (): { bookmarks: { ids: number[] } } => {
  try {
    const serializedState = localStorage.getItem("bookmarks");
    if (serializedState === null) {
      return { bookmarks: { ids: [] } };
    }
    return { bookmarks: { ids: JSON.parse(serializedState) } };
  } catch (err) {
    console.error("خطا در خواندن بوکمارک‌ها از لوکال استوریج:", err);
    return { bookmarks: { ids: [] } };
  }
};

// بارگذاری اولیه حالت تاریک/روشن از لوکال استوریج
const loadDarkModeState = (): { darkMode: { isDarkMode: boolean } } => {
  try {
    const serializedState = localStorage.getItem("isDarkMode");
    if (serializedState === null) {
      return { darkMode: { isDarkMode: false } };
    }
    return { darkMode: { isDarkMode: JSON.parse(serializedState) } };
  } catch (err) {
    console.error("خطا در خواندن حالت تاریک از لوکال استوریج:", err);
    return { darkMode: { isDarkMode: false } };
  }
};

// ترکیب وضعیت‌های اولیه
const preloadedState = {
  ...loadBookmarkState(),
  ...loadDarkModeState(),
};

export const store = configureStore({
  reducer: {
    bookmarks: bookmarkReducer,
    darkMode: darkModeReducer,
  },
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;