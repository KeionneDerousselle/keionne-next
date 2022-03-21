import { FC } from 'react';
import classNames from 'classnames';

export type NavToggleButtonProps = {
  id?: string;
  className?: string;
  isNavOpen: boolean;
  onClick: () => void;
};

export const NavToggleButton: FC<NavToggleButtonProps> = ({ id, isNavOpen, onClick }) => (
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
