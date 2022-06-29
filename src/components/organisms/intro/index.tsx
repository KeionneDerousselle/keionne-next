import { FC } from 'react';
import classNames from 'classnames';
import TextLoop from 'react-text-loop';
import { faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Parallax } from './parallax';
import { AnimatedScrollIndicator } from './animated-scroll-indicator';
import { IconLinkBar } from '@/components/molecules/icon-link-bar';
import { IconLinkBarItemProps } from '@/components/atoms/icon-link-bar-item';

export interface IntroProps {
  id: string;
  className?: string;
}

const iconLinkBarItems: IconLinkBarItemProps[] = [
  {
    href: 'https://www.linkedin.com/in/keionnederousselle/',
    icon: faLinkedinIn,
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://twitter.com/KeionneD',
    icon: faTwitter,
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://github.com/KeionneDerousselle',
    icon: faGithub,
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'mailto:knnderousselle@gmail.com',
    icon: faEnvelope,
  },
];

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
        <IconLinkBar className="mt-6" iconLinkBarItems={iconLinkBarItems} />
      </div>
      <AnimatedScrollIndicator href="/#about" />
      <Parallax />
    </div>
  </section>
);
