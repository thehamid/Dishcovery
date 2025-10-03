"use client";

import { RootState, AppDispatch } from "../../store";
import { LuDelete, LuSquareArrowLeft } from "react-icons/lu";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookmark } from "@/store/bookmarkSlice";
import { useEffect, useState } from "react";
import Loading from "@/components/elements/Loading";

interface BookmarkItem {
  id: number;
  name: string;
  imageUrl: string;
}

const BookmarksPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  // تغییر: bookmarkItems شامل اطلاعات کامل است
  const bookmarkItems = useSelector((state: RootState) => state.bookmarks.items);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  const handleRemoveBookmark = (item: BookmarkItem) => {
    dispatch(toggleBookmark(item)); // ارسال کل شیء
  };

  return (
    <div className="container mx-auto min-h-svh">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold m-4 text-red-600">Bookmark List</h1>
        <Link
          href="/"
          className="flex items-center gap-2 bg-gray-200 dark:bg-zinc-700 p-2 rounded-full hover:bg-red-600 hover:text-gray-100"
        >
          <LuSquareArrowLeft /> Back
        </Link>
      </div>

      <section className="border-[1px] rounded-md p-2">
        {bookmarkItems.length === 0 ? (
          <p>Bookmark List is empty.</p>
        ) : (
          <ul className="space-y-3">
            {bookmarkItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-zinc-700"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.jpg";
                    }}
                  />
                  <Link href={`/recipe/${item.id}`} className="dark:text-white">{item.name}</Link>
                </div>
                <button
                  onClick={() => handleRemoveBookmark(item)}
                  className="p-2 text-xl cursor-pointer text-red-600 bg-gray-100 dark:bg-zinc-800 rounded-full"
                >
                  <LuDelete />
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default BookmarksPage;