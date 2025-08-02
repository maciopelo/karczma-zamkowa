'use client';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { ChangeEvent, useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Locale } from '@/i18n/routing';

const localeOptions = [
  {
    label: '🇵🇱',
    value: 'pl',
    alt: 'Polski',
  },
  {
    label: '🇬🇧',
    value: 'en',
    alt: 'English',
  },
  {
    label: '🇨🇿',
    value: 'cz',
    alt: 'Deutsch',
  },
];

export const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  };

  return (
    <select
      name="locale-switcher"
      onChange={onSelectChange}
      defaultValue={locale}
      disabled={isPending}
      className="no-arrow cursor-pointer appearance-none bg-transparent py-2.5 pl-1 text-2xl text-stone-900 md:pl-4"
    >
      {localeOptions.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="cursor-pointer text-xl sm:text-base"
        >
          {option.label.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
