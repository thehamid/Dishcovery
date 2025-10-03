"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { loadBookmarks } from "@/store/bookmarkSlice";
import { toggleDarkMode } from "@/store/darkModeSlice";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // بارگذاری از localStorage فقط در کلاینت
    const savedBookmarks = localStorage.getItem("bookmarks");
    if (savedBookmarks) {
      try {
        const parsed = JSON.parse(savedBookmarks);
        store.dispatch(loadBookmarks(parsed));
      } catch (e) {
        console.error("خطا در خواندن بوکمارک‌ها:", e);
      }
    }

    const savedDarkMode = localStorage.getItem("isDarkMode");
    if (savedDarkMode) {
      try {
        const isDark = JSON.parse(savedDarkMode);
        if (isDark) {
          store.dispatch(toggleDarkMode());
        }
      } catch (e) {
        console.error("خطا در خواندن حالت تاریک:", e);
      }
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}