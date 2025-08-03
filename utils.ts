import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, addDays, parse } from 'date-fns';
import { pl, enGB, cs } from 'date-fns/locale';
import { Locale } from '@/i18n/routing';
import { IDailyMeals } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authHeaders = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.JWT}`,
};

export const get = async (
  url: string,
  params?: Record<string, string | number | boolean>,
) => {
  let fullUrl = `${process.env.NEXT_PUBLIC_CMS_API_URL}${url}`;
  if (params && Object.keys(params).length > 0) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, String(value));
    });
    fullUrl += `?${searchParams.toString()}`;
  }

  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: authHeaders,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getMealsWithDays = (dailyMeals: IDailyMeals, locale: Locale) => {
  // Parse input like '20250723' into a Date
  const startDate = parse(dailyMeals['start-date'], 'yyyyMMdd', new Date());

  const localeMap = {
    pl,
    en: enGB,
    cz: cs,
  };

  for (let i = 0; i < 5; i++) {}

  return [
    dailyMeals.monday,
    dailyMeals.tuesday,
    dailyMeals.wednesday,
    dailyMeals.thursday,
    dailyMeals.friday,
  ].map((meal, idx) => {
    const currDate = addDays(startDate, idx);

    // Format: "środa, 23.07.2025"
    const [day, date] = format(currDate, 'EEEE, dd.MM.yyyy', {
      locale: localeMap[locale] || pl,
    }).split(',');
    return { meal, day, date };
  });
};
