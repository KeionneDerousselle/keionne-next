import React, { forwardRef, ForwardedRef, ReactNode, PropsWithChildren, ForwardRefRenderFunction } from 'react';
import Link, { LinkProps as NextLinkProps } from 'next/link';
import classNames from 'classnames';

export type ButtonProps = JSX.IntrinsicElements['button'] &
  PropsWithChildren & {
    className?: string;
    href: undefined;
    right?: ReactNode;
    loading?: boolean;
    disabled?: boolean;
  };

export type AnchorProps = JSX.IntrinsicElements['a'] &
  PropsWithChildren & {
    className?: string;
    right?: ReactNode;
    loading?: boolean;
    disabled?: boolean;
  };

export type LinkProps = NextLinkProps &
  PropsWithChildren & {
    className?: string;
    right?: ReactNode;
    loading?: boolean;
    disabled?: boolean;
  };

export type ButtonAnchorLinkProps = ButtonProps | AnchorProps | LinkProps;

export type PolymorphicButton = {
  (props: AnchorProps): JSX.Element;
  (props: ButtonProps): JSX.Element;
  (props: LinkProps): JSX.Element;
};

const isAnchor = (props: ButtonAnchorLinkProps): props is AnchorProps => props.href !== undefined;
const isNextLink = (props: ButtonAnchorLinkProps): props is LinkProps => props.href !== undefined;

const BL: ForwardRefRenderFunction<HTMLButtonElement | HTMLAnchorElement, ButtonAnchorLinkProps> = (props, ref) => {
  const { href, className = '', children, right, loading, disabled, ...other } = props;
  const isAnchorLink = isAnchor(props);
  const isNextLinkLink = isNextLink(props);

  const classes = classNames(
    'appearance-none relative flex items-center justify-center align-middle rounded-full cursor-pointer no-underline select-none py-3 px-8 m-0 font-bold text-center leading-none text-white bg-pink-400 transition-all duration-300 ease-out hover:scale-90 focus:scale-90 ',
    { 'disabled:cursor-not-allowed disabled:bg-slate-600 disabled:transform-none': !isAnchorLink && !isNextLinkLink },
    { 'cursor-not-allowed bg-slate-600': disabled && (isAnchorLink || isNextLinkLink) },
    className
  );

  const content = (
    <div className="flex items-center justify-center ml-0 mr-0">
      <span className="flex items-center justify-center">{children}</span>

      {(right || loading) && (
        <span className="flex items-center justify-center ml-4 text-sm font-normal">
          {loading && (
            <span className="inline-block w-4 h-4 not-italic font-normal text-center normal-case bg-transparent border-2 border-r-0 border-white border-solid rounded-full sm:text-sm transition-all duration-150 ease-out animate-spin" />
          )}
          {right && !loading && <span>{right}</span>}
        </span>
      )}
    </div>
  );

  if (isAnchorLink) {
    return (
      <a ref={ref as ForwardedRef<HTMLAnchorElement>} className={classes} {...(other as AnchorProps)}>
        {content}
      </a>
    );
  } else if (isNextLinkLink) {
    return (
      <Link href={href} {...(other as NextLinkProps)}>
        <a ref={ref as ForwardedRef<HTMLAnchorElement>} className={classes}>
          {content}
        </a>
      </Link>
    );
  } else {
    return (
      // type will be defined in the other props
      // eslint-disable-next-line react/button-has-type
      <button
        ref={ref as ForwardedRef<HTMLButtonElement>}
        className={classes}
        disabled={disabled}
        {...(other as ButtonProps)}
      >
        {content}
      </button>
    );
  }
};

export const ButtonLink = forwardRef(BL) as PolymorphicButton;
