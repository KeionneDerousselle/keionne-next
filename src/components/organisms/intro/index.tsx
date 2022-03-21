import { FC } from 'react';
import classNames from 'classnames';
import { Parallax } from './parallax';
import { AnimatedScrollIndicator } from './animated-scroll-indicator';

export type IntroProps = {
  id: string;
  className?: string;
};

export const Intro: FC<IntroProps> = ({ id, className }) => (
  <section
    id={id}
    className={classNames(
      'relative flex items-center h-[100vh] min-h-[100vh] bg-purple-700 pt-[300px] md:p-0',
      className
    )}
  >
    <div className="k-container">
      <div className="relative z-20 max-w-xl m-auto text-center">
        <h1 className="mb-2 text-3xl font-bold text-white">Keionne Derousselle</h1>
      </div>
      <AnimatedScrollIndicator href="/#about" />
      <Parallax />
    </div>
  </section>
);
