import { FC } from 'react';
import NextLink, { LinkProps as NLinkProps } from 'next/link';
import classNames from 'classnames';

export type LinkProps = NLinkProps & {
  href: string;
  isActive?: boolean;
  activeClassName?: string;
  className?: string;
  onClick?: (href: string) => void;
};

export const NavLink: FC<LinkProps> = ({
  href,
  className = '',
  children,
  isActive,
  activeClassName,
  onClick,
  ...props
}) => {
  return (
    <NextLink {...(props as NLinkProps)} href={href} passHref scroll={false}>
      <a
        onClick={() => onClick(href)}
        className={classNames(
          'font-bold cursor-pointer transition-colors duration-300 ease-in-out focus:outline-none',
          className,
          { [activeClassName]: isActive }
        )}
      >
        {children}
      </a>
    </NextLink>
  );
};
