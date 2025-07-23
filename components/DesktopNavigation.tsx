import { navigationItems } from '@/constants';

import Link from 'next/link';
import { FacebookIcon } from './FacebookIcon';
import { InstagramIcon } from './InstagramIcon';

export function DesktopNavigation() {
  return (
    <nav className="hidden md:block">
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
                <Link href={item.href}>{item.label}</Link>
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
