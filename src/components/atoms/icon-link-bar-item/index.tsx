import { AnchorHTMLAttributes, FC } from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export interface IconLinkBarItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  listItemClassName?: string;
  iconClassName?: string;
  icon: FontAwesomeIconProps['icon'];
  size?: FontAwesomeIconProps['size'];
}

export const IconLinkBarItem: FC<IconLinkBarItemProps> = ({
  listItemClassName,
  icon,
  size,
  iconClassName,
  ...props
}) => {
  return (
    <li className={listItemClassName}>
      <a {...props}>
        <FontAwesomeIcon icon={icon} size={size} className={iconClassName} />
      </a>
    </li>
  );
};
