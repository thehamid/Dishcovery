"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../store/darkModeSlice";
import { RootState } from "../../store";
import { BsMoonStars, BsSun } from "react-icons/bs";

const DarkModeToggle = () => {
 const [mounted, setMounted] = useState(false);
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    setMounted(true);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  if (!mounted) {
    return null; // تا زمان Mount شدن، چیزی نشان نده
  }

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className={`p-3 cursor-pointer rounded-full ${isDarkMode ? "bg-gray-800 text-yellow-300" : "bg-gray-200 text-gray-800"}`}
    >
      {isDarkMode ? <BsSun/> : <BsMoonStars/>}
    </button>
  );
};

export default DarkModeToggle;