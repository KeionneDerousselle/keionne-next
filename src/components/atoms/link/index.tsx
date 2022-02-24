import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NextLink, { LinkProps as NLinkProps } from 'next/link';
import { Link as ScrollLink, LinkProps as SLinkProps } from 'react-scroll';
import { UrlObject } from 'url';
import classNames from 'classnames';

export type AnchorProps = JSX.IntrinsicElements['a'] & {
  offset?: number | undefined;
  activeClass?: string;
  download?: string | boolean;
  className?: string;
};

export type InternalLinkProps = NLinkProps & {
  offset?: number | undefined;
  activeClass?: string;
  download: undefined;
  className?: string;
};

export type ScrollLinkProps = SLinkProps & {
  activeClass?: string;
  href: undefined;
  download: undefined;
  className?: string;
};

export type LinkProps = AnchorProps | InternalLinkProps | ScrollLinkProps;

const isUrlObject = (url: UrlObject | string): url is UrlObject => typeof url === 'object' && url.href !== undefined;

const isScrollLink = (props: LinkProps): props is AnchorProps =>
  props.href &&
  !props.download &&
  ((typeof props.href === 'string' && props.href.startsWith('#')) ||
    (isUrlObject(props.href) && props.href.href.startsWith('#')));

const isInternalLink = (props: LinkProps): props is InternalLinkProps =>
  props.href &&
  !props.download &&
  ((typeof props.href === 'string' && props.href.startsWith('/')) ||
    (isUrlObject(props.href) && props.href.href.startsWith('/')));

export const Link: FC<LinkProps> = (props) => {
  const { href, className = '', download, children, activeClass, offset, ...other } = props;
  const router = useRouter();
  const getHrefString = () => (typeof href === 'string' ? href : href.href);
  const [isActive, setIsActive] = useState(false);
  const [hrefAsString, setHrefAsString] = useState(getHrefString());

  useEffect(() => {
    const h = getHrefString();
    setHrefAsString(h);
    setIsActive((router.isReady && router.pathname === h) || router.asPath.endsWith(h));
  }, [href, router]);

  if (isScrollLink(props)) {
    const hrefWithoutHash = hrefAsString.replace('#', '');
    return (
      <ScrollLink
        {...(other as ScrollLinkProps)}
        to={hrefWithoutHash}
        spy
        hashSpy
        smooth
        offset={offset}
        activeClass={activeClass}
        className={className}
      >
        {children}
      </ScrollLink>
    );
  } else if (isInternalLink(props)) {
    return (
      <NextLink {...(other as InternalLinkProps)} href={href} passHref>
        <a className={classNames(className, { [activeClass]: isActive })}>{children}</a>
      </NextLink>
    );
  } else {
    return (
      <a
        {...(other as AnchorProps)}
        href={hrefAsString}
        download={download}
        className={classNames(className, { [activeClass]: isActive })}
      >
        {children}
      </a>
    );
  }
};
