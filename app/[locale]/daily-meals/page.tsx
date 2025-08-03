import { Locale } from '@/i18n/routing';
import { IDailyMeals } from '@/types';
import { get, getMealsWithDays } from '@/utils';
import { getLocale, getTranslations } from 'next-intl/server';

export const revalidate = 1200; // 20 minutes

const fetchDailyMeals = async () => {
  const dailyMeals = await get('/daily-meal', {
    _fields: 'id,acf',
  });

  const result = {
    id: dailyMeals[0].id,
    ...dailyMeals[0].acf,
  } as IDailyMeals;

  return result;
};

export const generateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: `Karczma Zamkowa - ${t('dailyMeals')}`,
    description: t('dailyMealDescription'),
  };
};

const Menu = async () => {
  const dailyMeals = await fetchDailyMeals();
  const locale = await getLocale();
  const t = await getTranslations();
  const days = getMealsWithDays(dailyMeals, locale as Locale);

  return (
    <div className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-start bg-stone-200 px-4 pt-24 md:pt-30">
      <div className="md:max-w-4/5 lg:max-w-1/2">
        <div className="pb-4 text-stone-700">
          <h2 className="py-3 text-xl font-bold uppercase md:text-2xl">
            {t('dailyMeal')} {dailyMeals['daily-meal-price']} zł
          </h2>
          <div className="mb-4 h-1 w-52 bg-stone-700" />
          <ul>
            {days.map((day) => (
              <li key={day.day} className="relative mb-8 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg uppercase md:text-xl">
                    <span className="font-medium">{day.day} </span>
                    {day.date}
                  </h3>
                  <span className="block md:hidden"></span>
                </div>

                <p className="md:text-md text-base">{day.meal}</p>
                <p className="absolute top-1/2 right-0 hidden items-center text-lg font-medium md:top-0 md:flex"></p>
              </li>
            ))}
            <li className="mb-4">
              <span className="font-semibold uppercase">
                {t('dailySet')} - {dailyMeals['set-price']} zł
              </span>
            </li>
            <li>
              <span className="font-semibold uppercase">
                {t('dailySoup')} - {dailyMeals['soup-price']} zł
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
