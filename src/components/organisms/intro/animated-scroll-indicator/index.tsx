import { FC } from 'react';
import NextLink from 'next/link';

export interface AnimatedScrollIndicatorProps {
  className?: string;
  href: string;
}

export const AnimatedScrollIndicator: FC<AnimatedScrollIndicatorProps> = ({ href }) => (
  <div className="absolute left-0 z-20 w-full bottom-10 scrolldown">
    <NextLink href={href} passHref>
      <a className="flex flex-col items-center m-auto text-sm text-center text-white cursor-pointer scale-100 hover:text-[#FFD15C] focus:text-[#FFD15C] focus:font-bold transition-all duration-150 ease-in-out transform-gpu focus:scale-110 focus:outline-none max-w-[100px]">
        <span>Scroll Down</span>
        <span className="relative w-5 border-2 border-white scrolldown__mouse rounded-2xl mt-[10px] h-[26px]">
          <span className="absolute block w-1 h-1 bg-white rounded-full scrolldown__mouse__wheel top-2 left-1/2 -translate-x-1/2 animate-mouse-wheel" />
        </span>
      </a>
    </NextLink>
  </div>
);
