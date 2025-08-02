import Link from 'next/link';
import { FacebookIcon } from './FacebookIcon';
import { InstagramIcon } from './InstagramIcon';
import { FACEBOOK_LINK, INSTAGRAM_LINK } from '@/constants';
import { getTranslations } from 'next-intl/server';

const Footer = async () => {
  const t = await getTranslations();
  return (
    <footer className="sticky flex items-center justify-between bg-neutral-950/95 px-4 py-6 sm:px-10 md:flex-row">
      <div className="flex flex-1 items-center justify-start gap-3 text-left">
        <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
          <FacebookIcon className="mr-4 fill-stone-200" />
        </a>
        <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="fill-stone-200" />
        </a>
      </div>

      <div className="hidden flex-1 items-center justify-start text-center text-xs font-bold sm:flex sm:justify-center sm:text-sm">
        <p className="pr-1">Copyright</p>
        <span className="text-lg min-[350px]:text-xs">©</span>
      </div>

      <div className="flex flex-1 items-center justify-end text-right text-sm sm:flex-1">
        <Link href="/privacy-policy">{t('privacyPolicy')}</Link>
      </div>
    </footer>
  );
};

export default Footer;
