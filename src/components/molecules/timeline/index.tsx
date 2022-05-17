import { FC } from 'react';
import classNames from 'classnames';
import { TimelineItem, TimelineItemColor } from './item';

export type TimelineProps = {
  id: string;
  className?: string;
  items?: TimelineItem[];
};

const timelineBgColors: Record<number, TimelineItemColor> = {
  0: 'blue',
  1: 'yellow',
  2: 'pink',
};

export const Timeline: FC<TimelineProps> = ({ id, className, items, children }) => (
  <ol
    id={id}
    className={classNames(
      className,
      'relative after:block after:absolute after:top-0 after:bottom-0 after:left-3 md:after:left-1/2 after:w-1 after:bg-pink-200 after:-ml-1'
    )}
  >
    {items
      ? items.map(({ id, ...itemProps }, index) => (
          <TimelineItem
            key={id}
            id={id}
            color={timelineBgColors[(index + 3) % 3]}
            right={index % 2 !== 0}
            {...itemProps}
          />
        ))
      : children}
  </ol>
);
