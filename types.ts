export interface IDailyMeals {
  id: number;
  'start-date': string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  'set-price': number;
  'soup-price': number;
  'daily-meal-price': number;
}

export interface IMenuMealResponse {
  id: number;
  acf: {
    name: string;
    description: string;
    price: number;
    vege: boolean;
  };
}
export interface IMenuCategoryResponse {
  id: number;
  acf: {
    name: string;
    meals: number[];
  };
}

export interface IMenuMeal {
  id: number;
  name: string;
  description: string;
  price: number;
  vege: boolean;
}

export interface IMenuCategory {
  id: number;
  name: string;
  meals: IMenuMeal[];
}
