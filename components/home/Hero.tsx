"use client";

import { useState } from "react";
import SearchInput from "./SearchInput";
import GridResult from "./GridResult";

interface Recipe {
  id: number;
  title: string;
  image: string;
  summary?: string;
}


function Hero() {
   const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [hasSearched, setHasSearched] = useState(false);
  
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  
    const handleSearch = async (query: string, category: string) => {
      if (!API_KEY) {
        setError("API Key Not Found.");
        return;
      }
  
      setLoading(true);
      setError(null);
      setHasSearched(true);
      try {
        let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=12`;
  
        if (query) url += `&query=${encodeURIComponent(query)}`;
        if (category) url += `&type=${category}`;
  
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
  
        const data = await response.json();
        setRecipes(data.results);
      } catch (err: any) {
        console.error("خطا در دریافت داده‌ها:", err);
        setError("خطا در دریافت داده‌ها. لطفاً دوباره تلاش کنید.");
      } finally {
        setLoading(false);
      }
    };
  return (
    <div className="w-full mx-auto">
    <div className="dark:bg-gray-800 bg-gray-100">
      <div className="dark:bg-transparent">
        <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
        
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
              Let's not stress for
              <span className="text-red-600 dark:text-red-500"> Recipe </span>
              Foods.
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-xl">
              A plate with a thousand flavors
            </p>
          </div>
            <SearchInput onSearch={handleSearch} />
        </div>
      </div>
    </div>
    <div >
           <GridResult recipes={recipes} loading={loading} error={error} hasSearched={hasSearched}  />
    </div>
    </div>
  );
}

export default Hero;
