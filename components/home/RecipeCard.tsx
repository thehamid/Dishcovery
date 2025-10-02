"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookmark, selectBookmarks } from "@/store/bookmarkSlice";
import { AppDispatch, RootState } from "@/store";
import Image from "next/image";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

interface Recipe {
  id: number;
  title: string;
  image: string;
  summary?: string; 
}

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const dispatch = useDispatch<AppDispatch>();
  const bookmarks = useSelector<RootState, number[]>(selectBookmarks);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [summary, setSummary] = useState<string | undefined>(recipe.summary);
  const [loadingSummary, setLoadingSummary] = useState(false);

  useEffect(() => {
    setIsBookmarked(bookmarks.includes(recipe.id));
  }, [bookmarks, recipe.id]);

  //  دریافت خلاصه که به دلیل محدودیت تعداد درخواست ها کامنت شد
  // useEffect(() => {
  //   if (!recipe.summary) {
  //     const fetchSummary = async () => {
  //       setLoadingSummary(true);
  //       try {
  //         const res = await fetch(
  //           `https://api.spoonacular.com/recipes/${recipe.id}/summary?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  //         );
  //         if (!res.ok) throw new Error("Failed to fetch summary");

  //         const data = await res.json();
  //         setSummary(data.summary || "خلاصه‌ای در دسترس نیست.");
  //       } catch (err) {
  //         console.error("Error fetching summary:", err);
  //         setSummary("خلاصه‌ای در دسترس نیست.");
  //       } finally {
  //         setLoadingSummary(false);
  //       }
  //     };

  //     // تاخیر 1 ثانیه‌ای
  //     const timer = setTimeout(() => {
  //       fetchSummary();
  //     }, 1000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [recipe.id, recipe.summary]);

  const handleBookmark = () => {
    dispatch(toggleBookmark(recipe.id));
  };

  return (
    <div className="border border-gray-100 dark:border-zinc-700 rounded-lg overflow-hidden shadow-md bg-white dark:bg-zinc-800 relative">
      <Link href={`/recipe/${recipe.id}`}>
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={312}
          height={231}
          loading="lazy"
          className="w-full h-40 object-cover z-10 cursor-pointer"
        />

        <div className="p-3">
          <h3 className="font-bold text-lg">{recipe.title}</h3>
        </div>
      </Link>
      <div className="p-3 border-t border-gray-200 dark:border-zinc-700">
        {loadingSummary ? (
          <p className="text-gray-500 text-sm mt-1 italic">...</p>
        ) : (
          summary && (
            <p className="text-gray-500 text-sm mt-1 line-clamp-2">
              {summary.replace(/<[^>]*>/g, "")}
            </p>
          )
        )}
      </div>
      <button
        onClick={handleBookmark}
        className="p-2 m-2 text-xl cursor-pointer text-red-600 bg-gray-100 dark:bg-zinc-800 rounded-full absolute top-0 z-auto"
      >
        {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
      </button>
    </div>
  );
};

export default RecipeCard;