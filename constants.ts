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
    label: 'menu',
    href: `/${sections.menu}`,
  },
  {
    label: 'dailyMeals',
    href: `/${sections.dailyMeals}`,
  },
  {
    label: 'offer',
    href: `/${sections.offer}`,
  },
  {
    label: 'gallery',
    href: `/${sections.gallery}`,
  },
  {
    label: 'contact',
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

export const GALLERY_ITEMS_PER_PAGE = 12;
