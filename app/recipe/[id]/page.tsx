import BookmarkButton from "@/components/elements/BookmarkButton";
import { RecipeDetail } from "@/types";
import Image from "next/image";
import Link from "next/link";
import {
  LuArrowBigRightDash,
  LuBeaker,
  LuChefHat,
  LuSoup,
  LuSquareArrowLeft,
  LuTimer,
} from "react-icons/lu";

interface RecipePageProps {
  params: Promise<{ id: string }>;
}

// Get Api
async function fetchRecipe(id: string): Promise<RecipeDetail | null> {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  if (!API_KEY) {
    console.error("API Key Not Found.");
    return null;
  }

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error(" Error for get recipe information :", err);
    return null;
  }
}

//Metadata
export async function generateMetadata({ params }: RecipePageProps) {
  const resolvedParams = await params; // await params
  const recipe = await fetchRecipe(resolvedParams.id);

  if (!recipe) {
    return { title: "Recipe Not Found" };
  }

  return {
    title: recipe.title,
    description: recipe.summary || `${recipe.title}`,
    openGraph: {
      title: recipe.title,
      description: recipe.summary || `${recipe.title}`,
      images: [
        {
          url: recipe.image,
          width: 800,
          height: 600,
          alt: recipe.title,
        },
      ],
    },
  };
}

//page function
export default async function RecipePage({ params }: RecipePageProps) {
  const resolvedParams = await params; // await params
  const recipe = await fetchRecipe(resolvedParams.id);

  if (!recipe) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Recipe Not Found</h1>
      </div>
    );
  }

  return (
    <article className="container mx-auto min-h-svh">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold m-4 text-red-600 flex gap-2 items-center">
          <LuChefHat /> {recipe.title}
        </h1>
        <Link
          href="/"
          className="flex items-center gap-2 bg-gray-200 dark:bg-zinc-700 p-2 rounded-full hover:bg-red-600 hover:text-gray-100"
        >
          {" "}
          <LuSquareArrowLeft /> Back
        </Link>
      </div>
      <section className="border-[1px] rounded-md p-4 my-5 ">
        <div className="mb-6 relative">
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={900}
            height={400}
            className="w-full h-64 object-cover rounded-lg"
          />
          <BookmarkButton recipe={recipe} />
        </div>

        {recipe.readyInMinutes && (
          <span className="flex gap-2 items-center mt-2 opacity-70">
            <LuTimer />
            Ready in minutes : {recipe.readyInMinutes} min
          </span>
        )}

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-red-800 flex gap-2 items-center">
            {" "}
            <LuArrowBigRightDash /> Summary{" "}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: recipe.summary || "Summary Not Found",
            }}
            className="opacity-70"
          />
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-red-800 flex gap-2 items-center">
            <LuSoup />
            Ingredients
          </h2>
          <ul className="list-disc pl-5">
            {recipe.extendedIngredients?.map((ing) => (
              <li
                key={ing.id}
                className="p-2 my-1 bg-gray-200 dark:bg-zinc-700 rounded-md "
              >
                {ing.original}
              </li>
            )) || <p>No material was found.</p>}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-red-800 flex gap-2 items-center">
            <LuBeaker /> Instructions
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: recipe.instructions || "Recipe Not Found",
            }}
            className="prose"
          />
        </section>
      </section>
    </article>
  );
}
