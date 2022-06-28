import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { useOnEscape } from '@/hooks/useOnEscape';
import { Overlay } from '@/components/atoms/overlay';

export interface ModalProps extends PropsWithChildren {
  id: string;
  ariaLabel?: string;
  className?: string;
  show: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ id, show, ariaLabel, className, onClose, children }) => {
  const [mounted, setMounted] = useState(false);

  const handleCloseClicked = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    onClose();
    event.stopPropagation();
  };

  useOnEscape(onClose);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modalContent = (
    <>
      <Overlay id={`${id}-overlay`} show={show} />

      <CSSTransition
        in={show}
        timeout={500}
        unmountOnExit
        classNames={{
          enter: 'scale-0 opacity-0',
          enterActive: 'scale-100 opacity-100 transition-all ease-in-out duration-500',
          exit: 'scale-0 opacity-0 transition-all ease-in-out duration-500',
        }}
      >
        <div
          id={`${id}-modal-container`}
          className={classNames(
            'fixed top-0 left-0 z-50 w-full h-full overflow-hidden outline-0 modal__container',
            className
          )}
          onClick={onClose}
        >
          <div
            id={`${id}-modal-wrapper`}
            className="relative z-10 h-full k-container max-h-[calc(100%-137px)] mt-[68.5px] modal__wrapper"
          >
            <div
              id={id}
              aria-modal
              aria-labelledby="modal-label"
              role="dialog"
              tabIndex={-1}
              className="relative max-h-full p-8 overflow-y-scroll bg-white overscroll-contain modal rounded-3xl top-1/2 -translate-y-1/2"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 id="modal-label" className="sr-only">
                {ariaLabel}
              </h2>
              <div className="flex items-center justify-end mb-3 modal__header">
                <button
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close Modal"
                  onClick={handleCloseClicked}
                  className="inline-block rounded modal__close-btn h-9 w-9 before:rounded before:bg-purple-600 before:w-4 before:h-0.5 before:block before:mx-auto before:rotate-[45deg] after:rounded after:bg-purple-600 after:w-4 after:h-0.5 after:block after:mx-auto after:translate-y-[-0.15rem] after:rotate-[-45deg]"
                ></button>
              </div>
              <div className="modal__content">{children}</div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );

  return mounted ? createPortal(modalContent, document.getElementById('modal-root')) : null;
};
