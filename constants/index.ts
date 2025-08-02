export const sections = {
  home: 'home',
  menu: 'menu',
  offer: 'offer',
  catering: 'catering',
  ventures: 'ventures',
  parties: 'parties',
  dailyMeals: 'daily-meals',
  gallery: 'gallery',
  contact: 'contact',
};

export const FACEBOOK_LINK =
  'https://www.facebook.com/profile.php?id=61574690601619&locale=pl_PL';

export const INSTAGRAM_LINK = 'https://www.instagram.com';

export const navigationItems = [
  {
    label: 'Menu',
    href: `/${sections.menu}`,
  },
  {
    label: 'Dania dnia',
    href: `/${sections.dailyMeals}`,
  },
  {
    label: 'Oferta',
    href: `/${sections.offer}`,
  },
  {
    label: 'Galeria',
    href: `/${sections.gallery}`,
  },
  {
    label: 'Kontakt',
    href: `/#${sections.contact}`,
  },
  {
    label: 'Facebook',
    href: FACEBOOK_LINK,
    external: true,
    icon: 'facebook',
  },
  // {
  //   label: 'Instagram',
  //   href: INSTAGRAM_LINK,
  //   external: true,
  //   icon: 'instagram',
  // },
];
