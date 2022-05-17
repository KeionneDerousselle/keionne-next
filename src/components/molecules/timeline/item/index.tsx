import { FC } from 'react';
import classNames from 'classnames';

export type TimelineItemColor = 'blue' | 'yellow' | 'pink';

export type TimelineItemProps = {
  id: string;
  className?: string;
  date: string;
  title: string;
  subtitle: string;
  right?: boolean;
  color: TimelineItemColor;
};

const timelineItemColors = {
  blue: {
    contentBgColor: 'bg-blue-300',
    textColor: 'text-white',
    rightArrowColor: 'before:border-r-blue-300',
    leftArrowColor: 'md:before:border-l-blue-300',
  },
  yellow: {
    contentBgColor: 'bg-yellow-400',
    textColor: 'text-purple-600',
    rightArrowColor: 'before:border-r-yellow-400',
    leftArrowColor: 'md:before:border-l-yellow-400',
  },
  pink: {
    contentBgColor: 'bg-pink-200',
    textColor: 'text-white',
    rightArrowColor: 'before:border-r-pink-200',
    leftArrowColor: 'md:before:border-l-pink-200',
  },
};

export const TimelineItem: FC<TimelineItemProps> = ({ id, date, title, subtitle, right, color, children }) => {
  const { contentBgColor, textColor, rightArrowColor, leftArrowColor } = timelineItemColors[color];

  return (
    <li
      id={id}
      className={classNames(
        'relative left-0 pl-14 py-3 w-full md:w-1/2',
        // dot
        'after:absolute after:w-5 after:h-5 after:rounded-full after:z-10 after:top-5 after:left-0 after:bg-pink-200',
        //arrow
        'before:absolute before:w-0 before:h-0 before:border-l-0 before:border-t-[20px] before:border-t-transparent before:border-b-[20px] before:border-b-transparent before:border-r-[20px] before:border-r-pink-200 before:left-9 before:top-[15%] before:translate-x-0',
        rightArrowColor,

        right
          ? 'md:left-1/2 md:pl-14 md:after:-left-3'
          : `md:left-0 md:pl-0 md:pr-14 md:after:-right-2 md:after:left-auto md:border-r-0 md:before:border-t-[20px] md:before:border-t-transparent md:before:border-r-transparent md:before:border-b-[20px] md:before:border-b-transparent md:before:border-l-[20px] md:before:border-l-pink-200 md:before:right-4 md:before:left-auto md:before:top-[15%] md:before:translate-x-0 ${leftArrowColor}`
      )}
    >
      <div className={classNames(contentBgColor, textColor, 'relative p-7 rounded-3xl')}>
        <time className="block mb-1 text-sm">{date}</time>
        <h3 className="mb-1 text-xl font-bold">{title}</h3>
        <h4 className="mb-3 text-lg font-medium">{subtitle}</h4>
        {children}
      </div>
    </li>
  );
};
