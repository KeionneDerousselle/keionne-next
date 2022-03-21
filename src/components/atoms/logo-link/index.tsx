import { FC } from 'react';
import NextLink from 'next/link';

export const LogoLink: FC = () => (
  <NextLink href="/" passHref>
    <a className="align-bottom">
      <span className="inline-flex items-end h-6">
        <span className="inline-block text-2xl font-bold text-white leading-5">Keionne</span>
        <span className="inline-block w-2 h-2 ml-1 bg-pink-300 rounded" />
      </span>
    </a>
  </NextLink>
);
