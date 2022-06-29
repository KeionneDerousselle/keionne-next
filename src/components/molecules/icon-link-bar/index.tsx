import { FC } from 'react';
import classNames from 'classnames';
import { IconLinkBarItem, IconLinkBarItemProps } from '@/components/atoms/icon-link-bar-item';

export interface IconLinkBarProps {
  className?: string;
  iconLinkBarItems: IconLinkBarItemProps[];
}

export const IconLinkBar: FC<IconLinkBarProps> = ({ iconLinkBarItems, className }) => {
  return (
    <ul className={classNames('flex items-center justify-center -mx-5', className)}>
      {iconLinkBarItems.map(({ href, icon, listItemClassName, iconClassName, size, ...props }) => (
        <IconLinkBarItem
          key={href}
          listItemClassName={classNames('px-5', listItemClassName)}
          anchorClassName="text-white hover:text-[#FFD15C] focus-within:text-[#FFD15C] focus:outline-none"
          iconClassName={classNames('transition-colors duration-150 ease-in-out fill-current', iconClassName)}
          href={href}
          icon={icon}
          size={size || 'lg'}
          {...props}
        />
      ))}
    </ul>
  );
};
