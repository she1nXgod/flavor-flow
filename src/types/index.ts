export interface User {
  id?: number;
  username: string;
  password?: string;
}

export type Recipe = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isLiked: boolean;
  ingredients: string[];
  instructions: string[];
  cookingTime: string;
  difficulty: string;
  servings: number;
  category: string;
};
