import classNames from 'classnames';
import { FC } from 'react';

export interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classNames('footer bg-purple-700 py-10', className)}>
      <div className="flex items-center justify-center k-container">
        <span className="text-sm text-purple-300">&copy; {currentYear} Keionne Derousselle</span>
      </div>
    </footer>
  );
};
