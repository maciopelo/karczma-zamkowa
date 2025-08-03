'use client';
import { useState } from 'react';
import { HamburgerButton } from './HamburgerButton';
import { cn } from '@/lib/utils';
import { navigationItems } from '@/constants';
import Link from 'next/link';
import { FacebookIcon } from './FacebookIcon';
import { InstagramIcon } from './InstagramIcon';
import { LocaleSwitcher } from './LocaleSwitcher';
import { useTranslations } from 'next-intl';

export function MobileNavigation() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  return (
    <div className="block lg:hidden">
      <HamburgerButton open={open} onClick={() => setOpen(!open)} />

      <div
        className={cn(
          'fixed top-20 right-0 left-0 z-20 h-full bg-stone-200 transition-transform duration-500 ease-out',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <nav>
          <ul className="mt-6 flex flex-col items-start">
            {navigationItems.map((item) => (
              <li
                key={item.label}
                className="mb-4 ml-4 px-4 py-2 text-xl text-stone-900 uppercase"
                onClick={() => setOpen(false)}
              >
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
              </li>
            ))}
            <li className="pl-7 text-3xl">
              <LocaleSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
