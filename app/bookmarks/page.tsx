"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../store"; 
import { LuSquareArrowLeft } from "react-icons/lu";
import Link from "next/link";

const BookmarksPage = () => {
  // خواندن وضعیت بوکمارک‌ها از استور
  const bookmarkIds = useSelector(
    (state: RootState) => state.bookmarks.ids
  );

  return (
    <div className="container mx-auto min-h-svh">
      <div className="flex justify-between items-center">
  <h1 className="text-2xl font-bold m-4 text-red-600">Bookmark List</h1>
  <Link href="/" className="flex items-center gap-2 bg-gray-200 dark:bg-zinc-700 p-2 rounded-full"> <LuSquareArrowLeft/> Back</Link>
      </div>
    
      <section className="border-[1px] rounded-md p-2 ">
      {bookmarkIds.length === 0 ? (
        <p>Bookmark List is empty.</p>
      ) : (
        <ul className="list-disc pl-5">
          {bookmarkIds.map((id) => (
            <li key={id} className="py-1">
               Recipe with ID : {id}
            </li>
          ))}
        </ul>
      )}
      </section>
    </div>
  );
};

export default BookmarksPage;