import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DarkModeState {
  isDarkMode: boolean;
}

const initialState: DarkModeState = {
  isDarkMode: false, 
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      // ذخیره در localStorage فقط در کلاینت
      if (typeof window !== "undefined") {
        localStorage.setItem("isDarkMode", JSON.stringify(state.isDarkMode));
        if (state.isDarkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    },
    loadDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
      if (state.isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

export const { toggleDarkMode, loadDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;