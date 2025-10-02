import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DarkModeState {
  isDarkMode: boolean;
}

const loadState = (): boolean => {
  try {
    const serializedState = localStorage.getItem("isDarkMode");
    if (serializedState === null) {
      return false; // پیش‌فرض: حالت روشن
    } 
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("خطا در خواندن حالت تاریک:", err);
    return false;
  }
};

const saveState = (state: boolean) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("isDarkMode", serializedState);
  } catch (err) {
    console.error("خطا در ذخیره حالت تاریک:", err);
  }
};

const initialState: DarkModeState = {
  isDarkMode: loadState(),
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      saveState(state.isDarkMode);
      if (state.isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;