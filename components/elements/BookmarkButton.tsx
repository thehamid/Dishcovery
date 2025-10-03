"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookmark, selectBookmarks } from "@/store/bookmarkSlice";
import { AppDispatch, RootState } from "@/store";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

interface BookmarkButtonProps {
  recipe: {
    id: number;
    title: string;
    image: string;
  };
}

const BookmarkButton = ({ recipe }: BookmarkButtonProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const bookmarks = useSelector<RootState, { id: number; name: string; imageUrl: string }[]>(selectBookmarks);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  useEffect(() => {
    setIsBookmarked(bookmarks.some(bookmark => bookmark.id === recipe.id));
  }, [bookmarks, recipe.id]);

  const handleBookmark = () => {
    const recipeBook = {
      id: recipe.id,
      name: recipe.title,
      imageUrl: recipe.image,
    };
    dispatch(toggleBookmark(recipeBook));
  };

  return (
    <button
      onClick={handleBookmark}
      className="p-2 m-2 text-xl cursor-pointer text-red-600 bg-gray-100 dark:bg-zinc-800 rounded-full absolute top-0 z-auto"
    >
      {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
    </button>
  );
};

export default BookmarkButton;