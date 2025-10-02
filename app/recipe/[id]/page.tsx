import { RecipeDetail } from "@/types";

interface RecipePageProps {
  params: { id: string };
}

// تابع برای دریافت داده از API
async function fetchRecipe(id: string): Promise<RecipeDetail | null> {
  const API_KEY = process.env.API_KEY;

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

export async function generateMetadata({ params }: RecipePageProps) {
  const recipe = await fetchRecipe(params.id);

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

export default async function RecipePage({ params }: RecipePageProps) {
  const recipe = await fetchRecipe(params.id);

  if (!recipe) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Recipe Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <article>
        <header className="mb-6">
          <h1 className="text-3xl font-bold">{recipe.title}</h1>
          {recipe.readyInMinutes && (
            <p className="text-gray-600 mt-2">
              زمان آماده شدن: {recipe.readyInMinutes} دقیقه
            </p>
          )}
        </header>

        <div className="mb-6">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">خلاصه</h2>
          <div
            dangerouslySetInnerHTML={{ __html: recipe.summary || "بدون خلاصه" }}
            className="text-gray-700"
          />
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">مواد لازم</h2>
          <ul className="list-disc pl-5">
            {recipe.extendedIngredients?.map((ing) => (
              <li key={ing.id} className="py-1">
                {ing.original}
              </li>
            )) || <p>هیچ ماده‌ای یافت نشد.</p>}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">دستور پخت</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: recipe.instructions || "دستور پخت یافت نشد.",
            }}
            className="prose"
          />
        </section>
      </article>
    </div>
  );
}