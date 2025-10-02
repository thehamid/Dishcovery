import { useState } from "react";

interface SearchInputProps {
  onSearch: (query: string, category: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [query, setQuery] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, category);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 text-gray-700 dark:text-gray-200 outline-none focus:outline-none"
    >
      <div className="relative flex">
        <input
          type="search"
          name="search"
          placeholder="Explor"
          className="bg-gray-300 dark:bg-gray-900 border-r-0 relative left-10 h-10 flex px-5 w-full rounded-full text-sm focus:outline-none border-2  border-gray-500 dark:border-gray-600"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          step="any"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-300 dark:bg-gray-900 h-10 px-5 xs:invisible relative left-5  rounded-r-full text-gray-700 dark:text-gray-200  text-sm  focus:outline-none outline-none border-2 border-gray-500 border-l-0 dark:border-gray-600 border-r-1 cursor-pointer max-h-10 overflow-y-hidden"
        >
          <option className="font-medium cursor-pointer" value="">
            All
          </option>
          <option className="font-medium cursor-pointer" value="bread">
            bread
          </option> 
          <option className="font-medium cursor-pointer active:outline-amber-500" value="appetizer">
            appetizer
          </option>
          <option className="font-medium cursor-pointer" value="dessert">
            dessert
          </option>
          <option className="font-medium cursor-pointer " value="salad">
            salad
          </option>
          <option className="font-medium cursor-pointer" value="breakfast">
            breakfast
          </option>
          <option className="font-medium cursor-pointer" value="beverage">
            beverage
          </option>
          <option className="font-medium cursor-pointer" value="fingerfood">
            fingerfood
          </option>
          <option className="font-medium cursor-pointer" value="snack">
            snack
          </option>
          <option className="font-medium cursor-pointer" value="marinade">
            marinade
          </option>
        </select>
        <button
          type="submit"
          className="bg-gray-500 text-white dark:bg-gray-800 h-10 w-40 px-6 rounded-r-full text-sm focus:outline-none outline-none border-2 border-gray-500 dark:border-gray-600 border-r-1 cursor-pointer max-h-10 overflow-y-hidden hover:bg-red-600"
        >
          Run
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
