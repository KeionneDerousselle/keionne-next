import { AnchorHTMLAttributes, FC } from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export interface IconLinkBarItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  listItemClassName?: string;
  anchorClassName?: string;
  iconClassName?: string;
  icon: FontAwesomeIconProps['icon'];
  size?: FontAwesomeIconProps['size'];
}

export const IconLinkBarItem: FC<IconLinkBarItemProps> = ({
  listItemClassName,
  anchorClassName,
  iconClassName,
  icon,
  size,
  ...props
}) => {
  return (
    <li className={listItemClassName}>
      <a className={anchorClassName} {...props}>
        <FontAwesomeIcon icon={icon} size={size} className={iconClassName} />
      </a>
    </li>
  );
};
