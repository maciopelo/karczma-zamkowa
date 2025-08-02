import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pl', 'en', 'cz'],
  defaultLocale: 'pl',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/daily-meals': {
      pl: '/dania-dnia',
      cz: '/tagesgerichte',
    },
    '/gallery': {
      pl: '/galeria',
      cz: '/galerie',
    },
    '/menu': {
      pl: '/menu',
      cz: '/menu',
    },
    '/offer': {
      pl: '/oferta',
      cz: '/angebot',
    },
    '/privacy-policy': {
      pl: '/polityka-prywatnosci',
      cz: '/datenschutzbestimmungen',
    },
  },
});

export type Locale = (typeof routing.locales)[number];
