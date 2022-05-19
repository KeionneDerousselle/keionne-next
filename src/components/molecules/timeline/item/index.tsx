import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

export type TimelineItemColor = 'blue' | 'yellow' | 'pink';

export type TimelineItem = {
  id: string;
  date: string | Date;
  title: string;
  subtitle: string;
  content: ReactNode;
};

export type TimelineItemProps = TimelineItem & {
  className?: string;
  right?: boolean;
  color: TimelineItemColor;
};

const timelineItemColors = {
  blue: {
    contentBgColor: 'bg-blue-300',
    textColor: 'text-white',
    rightArrowColor: 'before:border-r-blue-300',
    leftArrowColor: 'md:before:border-l-blue-300',
    dotColor: 'after:bg-blue-300',
  },
  yellow: {
    contentBgColor: 'bg-yellow-400',
    textColor: 'text-purple-600',
    rightArrowColor: 'before:border-r-yellow-400',
    leftArrowColor: 'md:before:border-l-yellow-400',
    dotColor: 'after:bg-yellow-400',
  },
  pink: {
    contentBgColor: 'bg-pink-200',
    textColor: 'text-white',
    rightArrowColor: 'before:border-r-pink-200',
    leftArrowColor: 'md:before:border-l-pink-200',
    dotColor: 'after:bg-pink-200',
  },
};

export const TimelineItem: FC<TimelineItemProps> = ({ id, date, title, subtitle, right, color, content }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { contentBgColor, textColor, rightArrowColor, leftArrowColor, dotColor } = timelineItemColors[color];
  const formattedDate =
    typeof date === 'string' ? date : date.toLocaleString('en-US', { month: 'short', year: 'numeric' });

  return (
    <li
      ref={ref}
      id={id}
      className={classNames(
        // content
        'relative left-0 pl-14 py-3 w-full md:w-1/2',

        // dot
        'after:absolute after:w-5 after:h-5 after:rounded-full after:z-10 after:top-5 after:left-0 after:transform-gpu after:transition-all after:duration-500 after:ease-in-out',
        dotColor,
        inView ? 'after:opacity-100 after:scale-125' : 'after:opacity-0 after:scale-0',

        right
          ? 'md:left-1/2 md:pl-14 md:after:-left-3'
          : 'md:left-0 md:pl-0 md:pr-14 md:after:-right-2 md:after:left-auto'
      )}
    >
      <div
        className={classNames(
          // content
          'relative p-7 rounded-3xl opacity-0 transition-all duration-500 ease-in-out',
          contentBgColor,
          textColor,

          //arrow
          'before:absolute before:w-0 before:h-0 before:border-l-0 before:border-t-[15px] before:border-t-transparent before:border-b-[15px] before:border-b-transparent before:border-r-[15px] before:-left-3 before:top-[15%] before:translate-x-0',
          rightArrowColor,
          {
            'md:before:border-t-[15px] md:before:border-t-transparent md:before:border-r-transparent md:before:border-b-[15px] md:before:border-b-transparent md:before:border-l-[15px] md:before:-right-7 md:before:left-auto md:before:top-[15%] md:before:translate-x-0':
              !right,
            [leftArrowColor]: !right,
          },

          // animations on scroll
          {
            'opacity-100 transform-none': inView,
            'transform-gpu translate-x-56': !inView,
            'md:-translate-x-56': !inView && !right,
          }
        )}
      >
        <time className="block mb-1 text-sm">{formattedDate}</time>
        <h3 className="mb-1 text-xl font-bold">{title}</h3>
        <h4 className="mb-3 text-lg font-medium">{subtitle}</h4>
        {content}
      </div>
    </li>
  );
};
