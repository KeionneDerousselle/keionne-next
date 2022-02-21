import { FC } from 'react';
import { SectionTitle } from '@/components/atoms/section-title';
import classNames from 'classnames';

export interface SectionProps {
  title: string;
  className?: string;
}

export const Section: FC<SectionProps> = ({ title, className, children }) => {
  return (
    <section className={classNames('section', className)}>
      <SectionTitle title={title} className="mb-16" />
      {children}
    </section>
  );
};
