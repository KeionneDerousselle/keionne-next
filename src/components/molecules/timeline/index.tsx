import { FC } from 'react';
import classNames from 'classnames';
import { TimelineItemProps, TimelineItem } from './item';

export type TimelineProps = {
  id: string;
  className?: string;
  items?: TimelineItemProps[];
};

const timelineBgColors = {
  0: 'bg-blue-300',
  1: 'bg-yellow-400',
  2: 'bg-pink-200',
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
            className={classNames(timelineBgColors[(index + 3) % 3], 'text-white')}
            right={index % 2 !== 0}
            {...itemProps}
          />
        ))
      : children}
  </ol>
);
