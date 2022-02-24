import { FC } from 'react';
import { SectionTitle } from '@/components/atoms/section-title';
import classNames from 'classnames';

export interface SectionProps {
  id?: string;
  title: string;
  className?: string;
}

export const Section: FC<SectionProps> = ({ id, title, className, children }) => {
  return (
    <section id={id} className={classNames('section', className)}>
      <SectionTitle title={title} className="mb-16" />
      {children}
    </section>
  );
};
