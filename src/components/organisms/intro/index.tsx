import { FC } from 'react';
import classNames from 'classnames';
import { Parallax } from './parallax';
import { AnimatedScrollIndicator } from './animated-scroll-indicator';
import TextLoop from 'react-text-loop';

export interface IntroProps {
  id: string;
  className?: string;
}

export const Intro: FC<IntroProps> = ({ id, className }) => (
  <section
    id={id}
    className={classNames('relative flex items-center h-[100vh] min-h-[100vh] bg-purple-700', className)}
  >
    <div className="k-container">
      <div className="relative z-20 max-w-xl m-auto text-center">
        <h1 className="mb-2 text-3xl font-bold text-white">Keionne Derousselle</h1>
        <h2 className="text-lg font-bold text-white">
          I&apos;m a&nbsp;
          <TextLoop springConfig={{ stiffness: 180, damping: 15 }}>
            <span>senior software engineer</span>
            <span>full stack engineer</span>
            <span>product driven engineer</span>
            <span>quality focused engineer</span>
            <span>diligent problem solver</span>
          </TextLoop>
        </h2>
      </div>
      <AnimatedScrollIndicator href="/#about" />
      <Parallax />
    </div>
  </section>
);
