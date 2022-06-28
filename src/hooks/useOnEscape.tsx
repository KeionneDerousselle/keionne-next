import { useEffect, useCallback } from 'react';

export type OnEscapeCallback = (event: KeyboardEvent) => void;

export const useOnEscape = (onEscape?: OnEscapeCallback): void => {
  const handleEscapePressed = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === 'Escape' && onEscape) {
        onEscape(event);
      }
    },
    [onEscape]
  );

  useEffect(() => {
    if (window && onEscape) {
      window.addEventListener('keydown', handleEscapePressed);
    }

    return () => {
      if (window) {
        window.removeEventListener('keydown', handleEscapePressed);
      }
    };
  }, [handleEscapePressed, onEscape]);
};
