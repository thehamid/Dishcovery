export interface Recipe {
  id: number;
  title: string;
  image: string;
  summary?: string;
}

export interface RecipeDetail {
  id: number;
  title: string;
  image: string;
  summary: string;
  readyInMinutes?: number;
  extendedIngredients: {
    id: number;
    original: string;
  }[];
  instructions?: string;
}