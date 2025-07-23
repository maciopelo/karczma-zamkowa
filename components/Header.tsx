import Link from 'next/link';
import { sections } from '@/constants';
import Image from 'next/image';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';

const Header = () => {
  return (
    <header
      id={sections.home}
      className="sticky top-0 z-20 flex h-20 items-center justify-between bg-neutral-950/85 px-4 lg:px-10"
    >
      <Link href="/">
        <Image
          src="/logo.png"
          width={150}
          height={80}
          className="max-w-30 lg:max-w-full"
          alt="Karczma Zamkowa logo"
          priority
        />
      </Link>

      <div className="flex">
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
