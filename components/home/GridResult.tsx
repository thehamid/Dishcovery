import Loading from "../elements/Loading";
import RecipeCard from "./RecipeCard";
import { Recipe } from "@/types";


interface GridResultProps {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
  hasSearched: boolean;
}

const GridResult = ({ recipes, loading, error, hasSearched }: GridResultProps) => {
  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <h6 className="text-red-500 text-center p-4 bg-zinc-100 dark:bg-gray-800">{error}</h6>;
  }

  if (recipes.length === 0 && hasSearched) {
    return <h6 className="text-center p-4 bg-zinc-100 dark:bg-gray-800">No recipes found.</h6>;
  }

  if (recipes.length === 0 && !hasSearched) {
    return null; 
  }

  return (
    <div className="container mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2 md:p-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
    </div>
  );
};

export default GridResult;