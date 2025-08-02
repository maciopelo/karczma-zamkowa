import { get } from '@/lib/utils';

interface IMenuMealResponse {
  id: number;
  acf: {
    name: string;
    description: string;
    price: number;
    vege: boolean;
  };
}
interface IMenuCategoryResponse {
  id: number;
  acf: {
    name: string;
    meals: number[];
  };
}

interface IMenuMeal {
  id: number;
  name: string;
  description: string;
  price: number;
  vege: boolean;
}
interface IMenuCategory {
  id: number;
  name: string;
  meals: IMenuMeal[];
}

// export const metadata = {
//   title: 'Karczma Zamkowa – Menu',
//   description: 'Sprawdź nasze menu pełne tradycyjnych polskich dań.',
//   keywords: [
//     'menu restauracji Kończyce Małe',
//     'dania polskie',
//     'Karczma Zamkowa menu',
//     'tradycyjne potrawy',
//   ],
//   openGraph: {
//     title: 'Karczma Zamkowa – Menu',
//     description: 'Odkryj nasze wyjątkowe menu z tradycyjnymi daniami.',
//     url: 'https://karczma-zamkowa.pl/menu',
//     siteName: 'Karczma Zamkowa',
//   },
//   metadataBase: new URL('https://karczma-zamkowa.pl'),
// };

const Price = ({ meal }: { meal: IMenuMeal }) => (
  <span className="flex items-center text-lg font-bold whitespace-nowrap text-stone-700">
    {meal?.vege && (
      <span className="ml-2 h-10 w-10 text-sm text-green-900">
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
        >
          <path d="M107.846 36.117c-25.555-5.723-44.869-4.157-57.4 4.651C39.871 48.2 38.358 57.995 38.221 59.087a26.8 26.8 0 0 0 1.417 12.754 127.849 127.849 0 0 0-20.216 21.4 1.25 1.25 0 1 0 2.011 1.485 133.619 133.619 0 0 1 30.881-29.513l22.615 7.264a1.25 1.25 0 1 0 .765-2.38l-20.775-6.672a146.051 146.051 0 0 1 26-14.1 1.25 1.25 0 0 0-.887-2.337 120.952 120.952 0 0 0-11.983 5.667l.639-7.908a1.25 1.25 0 1 0-2.492-.2l-.771 9.535a166.51 166.51 0 0 0-13.838 8.6 1.233 1.233 0 0 0-.476.331 155.306 155.306 0 0 0-9.43 7.124A24.406 24.406 0 0 1 40.7 59.4c.448-3.557 3.307-11.053 11.18-16.586 11.354-7.979 29.595-9.629 52.867-4.807-2.972 2.623-8.135 8.123-9.264 15.469-.23 1.5-.427 3.182-.635 4.967-1.164 9.985-2.761 23.657-12.94 29.989-9.141 5.678-26.28 1.032-35.272-9.564a1.25 1.25 0 1 0-1.906 1.617c6.89 8.119 17.889 12.91 27.4 12.91a20.946 20.946 0 0 0 11.1-2.84c11.2-6.964 12.881-21.332 14.105-31.823.206-1.762.4-3.426.623-4.877 1.405-9.155 10.242-15.431 10.331-15.493a1.25 1.25 0 0 0-.442-2.245z" />
        </svg>
      </span>
    )}
    {meal.price} zł
  </span>
);

export const revalidate = 1200; // 20 minutes

const fetchMenu = async () => {
  const params = {
    per_page: 50,
    orderby: 'date',
    order: 'asc',
    _fields: 'id,acf',
  };
  const categories = await get('/menu-category', params);

  const meals = await get('/menu-meal', params);

  const categoriesWithMeals = categories.map(
    (category: IMenuCategoryResponse) => {
      const mealsIds = category.acf.meals;
      const matchedMeals = meals
        .filter((meal: IMenuMealResponse) => mealsIds.includes(meal.id))
        .map((meal: IMenuMealResponse) => ({ id: meal.id, ...meal.acf }));

      return {
        id: category.id,
        ...category.acf,
        meals: matchedMeals,
      };
    },
  );

  return categoriesWithMeals;
};

const Menu = async () => {
  const categories = await fetchMenu();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone-200 px-4 pt-24 md:pt-30">
      <div className="md:max-w-4/5 lg:max-w-1/2">
        {categories.map((category: IMenuCategory) => (
          <div key={category.id} className="pb-4 text-stone-700">
            <h2 className="py-3 text-xl font-bold uppercase md:text-2xl">
              {category.name}
            </h2>
            <ul>
              {category.meals.map((meal: IMenuMeal) => (
                <li
                  key={meal.name}
                  className="relative mb-6 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg uppercase md:text-xl">
                      {meal.name}
                    </h3>
                    <span className="block md:hidden">
                      <Price meal={meal} />
                    </span>
                  </div>

                  <p className="md:text-md max-w-5/6 text-sm">
                    {meal.description}
                  </p>
                  <p className="absolute top-1/2 right-0 hidden items-center text-lg font-medium md:top-0 md:flex">
                    <Price meal={meal} />
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
