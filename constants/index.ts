export const sections = {
  home: 'home',
  menu: 'menu',
  offer: 'offer',
  gallery: 'galeria',
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
    label: 'Oferta',
    href: `/${sections.offer}`,
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
