import { FC } from 'react';
import classNames from 'classnames';

export interface SectionTitleProps {
  title: string;
  className?: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <h2
      className={classNames(
        "section__title text-4xl relative font-bold ml-3.5 text-purple-600 font-rubik before:block before:absolute before:-top-3.5 before:-left-3.5 before:w-[37px] before:h-[37px] before:bg-[url('/img/section-title/bg.svg')]",
        className
      )}
    >
      {title}
    </h2>
  );
};
