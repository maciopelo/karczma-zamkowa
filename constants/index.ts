export const sections = {
  home: 'home',
  about: 'about',
  restaurant: 'restaurant',
  menu: 'menu',
  contact: 'contact',
};

export const FACEBOOK_LINK =
  'https://www.facebook.com/profile.php?id=61574690601619&locale=pl_PL';

export const INSTAGRAM_LINK = 'https://www.instagram.com';

export const navigationItems = [
  {
    label: 'Menu',
    href: `/#${sections.about}`,
  },
  {
    label: 'Oferta',
    href: `/#${sections.restaurant}`,
  },
  {
    label: 'Galeria',
    href: 'Kontakt',
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
  {
    label: 'Instagram',
    href: INSTAGRAM_LINK,
    external: true,
    icon: 'instagram',
  },
];
