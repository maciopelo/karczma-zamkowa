import Link from 'next/link';
import { FacebookIcon } from './FacebookIcon';
import { InstagramIcon } from './InstagramIcon';
import { LocaleSwitcher } from './LocaleSwitcher';
import { getTranslations } from 'next-intl/server';
import { navigationItems } from '@/constants';

export async function DesktopNavigation() {
  const t = await getTranslations();
  return (
    <nav className="hidden lg:block">
      <ul className="flex">
        {navigationItems.map((item) => (
          <li
            key={item.label}
            className="flex cursor-pointer rounded-full border border-transparent px-4 py-2.5 text-xl transition-colors"
          >
            <button className="font-semibold uppercase hover:text-stone-500">
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.icon === 'facebook' ? (
                    <FacebookIcon />
                  ) : item.icon === 'instagram' ? (
                    <InstagramIcon />
                  ) : null}
                </a>
              ) : (
                <Link href={item.href}>{t(item.label)}</Link>
              )}
            </button>
          </li>
        ))}
        <LocaleSwitcher />
      </ul>
    </nav>
  );
}
