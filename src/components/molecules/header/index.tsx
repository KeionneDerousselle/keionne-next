import { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMedia } from 'use-media';
import classNames from 'classnames';
import tailwindConfig from '../../../../tailwind.config.js';

type NavLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
  className?: string;
};

const NavLink: FC<NavLinkProps> = ({ href, isActive, className, label }) => (
  <li className={classNames('inline-block py-2 md-992:py-0', className)}>
    <Link href={href} passHref>
      <a
        className={classNames('transition-colors duration-300 ease-in-out focus:outline-none font-bold', {
          'text-yellow-300': isActive,
          'text-white': !isActive,
        })}
      >
        {label}
      </a>
    </Link>
  </li>
);

const LogoLink: FC = () => {
  const router = useRouter();
  const onHomePage = router.pathname === '/';

  return (
    <Link href="/" passHref>
      <a aria-current={onHomePage ? 'page' : 'false'} className="align-bottom">
        <span className="inline-flex items-end h-6">
          <span className="inline-block text-2xl font-bold text-white leading-5">Keionne</span>
          <span className="inline-block w-2 h-2 ml-1 bg-pink-300 rounded" />
        </span>
      </a>
    </Link>
  );
};

type NavToggleButtonProps = {
  id?: string;
  className?: string;
  isNavOpen: boolean;
  onClick: () => void;
};
const NavToggleButton: FC<NavToggleButtonProps> = ({ id, isNavOpen, onClick }) => (
  <button
    id={id}
    type="button"
    aria-label="Toggle Main Navigation Menu"
    aria-controls="header-nav-menu"
    aria-expanded={isNavOpen}
    className={classNames(
      'header-nav-menu-toggle inline-block rounded md-992:hidden h-9 w-9 border border-purple-200',
      'before:block before:w-4 before:h-0.5 before:rounded before:bg-purple-200 before:transition-all before:duration-300 before:mx-auto',
      'after:block after:w-4 after:h-0.5 after:rounded after:bg-purple-200 after:transition-all after:duration-300 after:mx-auto',

      {
        'before:translate-y-[0.23rem] before:rotate-[135deg]': isNavOpen,
        'after:translate-y-[-0.23rem] after:rotate-[-135deg]': isNavOpen,
      }
    )}
    onClick={onClick}
  >
    <span
      className={classNames('block w-4 h-0.5 rounded bg-purple-200 transition-all duration-300 mx-auto my-0.5', {
        'scale-0': isNavOpen,
      })}
    />
  </button>
);

export type HeaderProps = {
  id?: string;
  className?: string;
};

export const Header: FC<HeaderProps> = ({ id, className }) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const isDesktopOrTablet = useMedia({ minWidth: tailwindConfig.theme.screens['md-992'] });

  const router = useRouter();

  const toggleNavMenu = () => {
    const navOpened = !isNavOpen;
    setNavOpen(navOpened);
  };

  const navLinks = [
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'Skills',
      href: '#skills',
    },
    {
      label: 'Experience',
      href: '#experience',
    },
    {
      label: 'Education',
      href: '#education',
    },
    {
      label: 'Portfolio',
      href: '#portfolio',
    },
    {
      label: 'Blog',
      href: '#blog',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ].map((navLink) => ({
    ...navLink,
    isActive: router.pathname === navLink.href || router.asPath.endsWith(navLink.href),
  }));

  return (
    <header
      id={id}
      className={classNames('header fixed w-full py-5 top-0 left-0 z-20 overflow-hidden bg-purple-700', className)}
    >
      <div className="k-container">
        <nav
          className="flex flex-col items-center w-full md-992:flex-row"
          aria-label="Main Navigation Menu"
          role="navigation"
        >
          <div className="flex self-start justify-between w-full md-992:self-auto md-992:mb-0 md-992:w-auto">
            <LogoLink />
            <NavToggleButton id="header-nav-menu-toggle" isNavOpen={isNavOpen} onClick={toggleNavMenu} />
          </div>

          <ul
            id="header-nav-menu"
            className={classNames(
              isDesktopOrTablet || isNavOpen ? 'flex' : 'hidden',
              'flex-col w-full flex-1 md-992:flex md-992:flex-row md-992:flex-auto md-992:mt-0 md-992:w-auto md-992:items-center md-992:justify-center md-992:-mx-6'
            )}
          >
            {navLinks.map((navLink) => (
              <NavLink key={navLink.href} className="md-992:px-6" {...navLink} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
