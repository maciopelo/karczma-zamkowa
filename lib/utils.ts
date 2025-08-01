import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
