import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const InstagramIcon = ({ className }: Props) => (
  <svg
    viewBox="0 0 50 50"
    fill="#ffffff"
    width="25px"
    height="25px"
    className={cn(
      'scale-150 fill-stone-900 transition-colors hover:fill-stone-500 md:scale-100 md:fill-stone-200',
      className,
    )}
  >
    <path d="M34,3H16C8.83,3,3,8.83,3,16v18c0,7.17,5.83,13,13,13h18c7.17,0,13-5.83,13-13V16C47,8.83,41.17,3,34,3z M25,36c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S31.07,36,25,36z M37,15c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S38.1,15,37,15z" />
    <path d="M34,25c0,4.96-4.04,9-9,9s-9-4.04-9-9s4.04-9,9-9S34,20.04,34,25z" />
  </svg>
);
