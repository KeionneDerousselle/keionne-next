import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { useMedia } from 'use-media';
import classNames from 'classnames';
import { NavLink } from '@/components/molecules/nav-link';
import tailwindConfig from '../../../../tailwind.config.js';
import { useGetCurrentElementInView } from '@/hooks/useGetCurrentElementInView';

const LogoLink: FC = () => (
  <NextLink href="/" passHref>
    <a className="align-bottom">
      <span className="inline-flex items-end h-6">
        <span className="inline-block text-2xl font-bold text-white leading-5">Keionne</span>
        <span className="inline-block w-2 h-2 ml-1 bg-pink-300 rounded" />
      </span>
    </a>
  </NextLink>
);

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
  const [sectionElements, setSectionElements] = useState<Element[]>([]);
  const [elInView] = useGetCurrentElementInView({ elements: sectionElements, options: { offset: -68.5 } });
  const router = useRouter();
  const isDesktopOrTablet = useMedia({ minWidth: tailwindConfig.theme.screens['md-992'] });

  const toggleNavMenu = () => {
    const navOpened = !isNavOpen;
    setNavOpen(navOpened);
  };

  const onNavLinkClicked = () => {
    if (!isDesktopOrTablet) {
      setNavOpen(false);
    }
  };

  const navLinks = [
    {
      label: 'About',
      href: '/#about',
    },
    {
      label: 'Skills',
      href: '/#skills',
    },
    {
      label: 'Experience',
      href: '/#experience',
    },
    {
      label: 'Education',
      href: '/#education',
    },
    {
      label: 'Portfolio',
      href: '/#portfolio',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Contact',
      href: '/#contact',
    },
  ];

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => {
        const anchor = href.split('#')[1];
        return document.querySelector(`section[id="${anchor}"]`);
      })
      .filter((el) => !!el);

    setSectionElements(sections);
  }, []);

  return (
    <header
      id={id}
      className={classNames('header fixed w-full py-5 top-0 left-0 z-50 overflow-hidden bg-purple-700', className)}
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
            {navLinks.map(({ href, label }) => {
              const { pathname } = router;
              let isActive = false;

              if (href.includes('#')) {
                const [hrefPath, hrefElId] = href.split('#');

                isActive = pathname === hrefPath && elInView === `#${hrefElId}`;
              } else {
                isActive = pathname === href;
              }

              return (
                <li key={href} className="inline-block py-2 md-992:py-0 md-992:px-6">
                  <NavLink
                    href={href}
                    onClick={onNavLinkClicked}
                    isActive={isActive}
                    activeClassName="text-yellow-300"
                    className="text-white"
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
