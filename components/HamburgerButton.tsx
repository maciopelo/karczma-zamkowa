import { cn } from '@/utils';

interface Props {
  open: boolean;
  onClick: () => void;
}
export function HamburgerButton({ open, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="relative mx-auto my-4 h-[18px] w-[24px] cursor-pointer transition-transform duration-500 ease-in-out"
    >
      <span
        className={cn(
          'absolute block h-[2px] w-full rounded-xl bg-stone-200 transition-all duration-300 ease-in-out',
          open
            ? 'top-[8px] left-0 origin-center rotate-45'
            : 'top-0 left-0 origin-left rotate-0',
        )}
      />
      <span
        className={cn(
          'absolute block h-[2px] w-full rounded-xl bg-stone-200 transition-all duration-300 ease-in-out',
          open ? 'w-0 opacity-0' : 'top-[8px] left-0 w-full opacity-100',
        )}
      />
      <span
        className={cn(
          'absolute block h-[2px] w-full rounded-xl bg-stone-200 transition-all duration-300 ease-in-out',
          open
            ? 'top-[8px] left-0 origin-center -rotate-45'
            : 'top-[16px] left-0 origin-left rotate-0',
        )}
      />
    </button>
  );
}
