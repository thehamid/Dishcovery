import Link from "next/link";
import Image from "next/image";
import BookmarkButton from "../elements/BookmarkButton";
import { Recipe } from "@/types";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="border border-gray-100 dark:border-zinc-700 rounded-lg overflow-hidden shadow-md bg-white dark:bg-zinc-800 relative">
      <Link href={`/recipe/${recipe.id}`}>
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={321}
          height={231}
          loading="lazy"
          className="w-full h-40 object-cover z-10 cursor-pointer"
        />

        <div className="p-3">
          <h3 className="font-bold text-lg">{recipe.title}</h3>
        </div>
      </Link>
      <div className="p-3 border-t border-gray-200 dark:border-zinc-700">
        {recipe.summary && (
          <p className="text-gray-500 text-sm mt-1 line-clamp-2">
            {recipe.summary.replace(/<[^>]*>/g, "")}
          </p>
        )}
      </div>
      <BookmarkButton recipe={recipe} />
    </div>
  );
};

export default RecipeCard;