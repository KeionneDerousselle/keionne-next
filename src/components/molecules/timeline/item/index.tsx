import { FC } from 'react';
import classNames from 'classnames';

export type TimelineItemProps = {
  id: string;
  className?: string;
  date: string;
  title: string;
  subtitle: string;
  right?: boolean;
};

export const TimelineItem: FC<TimelineItemProps> = ({ id, className, date, title, subtitle, right, children }) => (
  <li
    id={id}
    className={classNames(
      'relative left-0 pl-14 py-3 w-full md:w-1/2',
      // dot
      'after:absolute after:w-5 after:h-5 after:rounded-full after:z-10 after:top-5 after:left-0 after:bg-pink-200',
      //arrow
      'before:absolute before:w-0 before:h-0 before:border-l-0 before:border-t-[20px] before:border-t-transparent before:border-b-[20px] before:border-b-transparent before:border-r-[20px] before:border-r-pink-200 before:left-9 before:top-[15%] before:translate-x-0',

      right
        ? 'md:left-1/2 md:pl-14 md:after:-left-3'
        : 'md:left-0 md:pl-0 md:pr-14 md:after:-right-2 md:after:left-auto md:border-r-0 md:before:border-t-[20px] md:before:border-t-transparent md:before:border-r-transparent  md:before:border-b-[20px] md:before:border-b-transparent md:before:border-l-[20px] md:before:border-l-pink-200 md:before:right-4 md:before:left-auto md:before:top-[15%] md:before:translate-x-0'
    )}
  >
    <div
      className={classNames(
        className,
        'relative p-7 rounded-3xl'
        // 'before:absolute before:w-0 before:h-0 before:border-l-0 before:border-t-[20px] before:border-t-transparent before:border-b-[20px] before:border-b-transparent before:border-r-[20px] before:border-r-inherit before:left-0 before:top-[15%] before:translate-x-0'
      )}
    >
      <time>{date}</time>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {children}
    </div>
  </li>
);
