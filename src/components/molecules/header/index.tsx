import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMedia } from 'use-media';
import classNames from 'classnames';
import { useGetCurrentElementInView } from '@/hooks/useGetCurrentElementInView';
import { NavLink } from '@/components/molecules/nav-link';
import { LogoLink } from '@/components/atoms/logo-link';
import { NavToggleButton } from '@/components/atoms/nav-toggle';
import tailwindConfig from '../../../../tailwind.config.js';

export interface HeaderProps {
  id?: string;
  className?: string;
}

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
      className={classNames('header fixed w-full py-5 top-0 left-0 z-30 overflow-hidden bg-purple-700', className)}
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
