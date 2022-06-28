import { useState, useEffect, useRef } from 'react';

export interface CurrentElementInView {
  currentElementInView: string;
}

export interface CurrentElementInViewProviderProps {
  elements: Element[];
  options?: {
    offset?: number;
    root?: HTMLElement;
  };
}

export const useGetCurrentElementInView = ({ elements, options }: CurrentElementInViewProviderProps): string[] => {
  const [currentElementInView, setCurrentElementInView] = useState('');
  const observer = useRef<IntersectionObserver>();
  const offset = options?.offset || 0;

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        const indexOfElementIntersecting = entries.findIndex((entry) => {
          return entry.intersectionRatio > 0;
        });

        setCurrentElementInView(
          indexOfElementIntersecting > -1 ? `#${entries[indexOfElementIntersecting].target.id}` : ''
        );
      },
      {
        root: options?.root || null,
        rootMargin: `${offset || 0}px 0px 0px 0px`,
      }
    );

    const { current: ourObserver } = observer;

    elements.forEach((element) => {
      element ? ourObserver.observe(element) : null;
    });

    return () => ourObserver.disconnect();
  }, [elements, options]);

  return [currentElementInView];
};
