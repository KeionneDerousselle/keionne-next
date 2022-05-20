import { FC, useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { useOnEscape } from '@/hooks/useOnEscape';

export type ModalProps = {
  // id: string;
  ariaLabel?: string;
  className?: string;
  show: boolean;
  onClose: () => void;
};

export const Modal: FC<ModalProps> = ({ show, ariaLabel, className, onClose, children }) => {
  const ref = useRef<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);

  const handleCloseClicked = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    onClose();
    event.stopPropagation();
  };

  useOnEscape(onClose);

  useEffect(() => {
    const portalRoot = document.getElementById('modal-root');
    ref.current = document.createElement('div');
    const { current } = ref;

    if (portalRoot) {
      portalRoot.appendChild(current);
    }

    setMounted(true);

    return () => {
      if (portalRoot) {
        portalRoot.removeChild(current);
      }
    };
  }, []);

  const modalContent = (
    <>
      <CSSTransition
        in={show}
        timeout={500}
        unmountOnExit
        classNames={{
          enter: 'opacity-0',
          enterActive: 'opacity-100 transition-all ease-in-out duration-500',
          exit: 'opacity-0 transition-all ease-in-out duration-500',
        }}
      >
        <div className="fixed top-0 bottom-0 left-0 right-0 z-40 w-screen h-screen overflow-hidden modal__overlay bg-[rgba(0,0,0,0.50)]" />
      </CSSTransition>

      <CSSTransition
        in={show}
        timeout={700}
        unmountOnExit
        classNames={{
          enter: 'scale-0 opacity-0',
          enterActive: 'scale-100 opacity-100 transition-all ease-in-out duration-700',
          exit: 'scale-0 opacity-0 transition-all ease-in-out duration-700',
        }}
      >
        <div
          aria-modal
          aria-labelledby="modal-label"
          role="dialog"
          tabIndex={-1}
          className={classNames('fixed top-0 left-0 z-50 w-full h-full overflow-hidden outline-0', className)}
          onClick={onClose}
        >
          <h2 id="modal-label" className="sr-only">
            {ariaLabel}
          </h2>

          <div className="relative z-10 h-full k-container max-h-[calc(100%-137px)] mt-[68.5px]">
            <div
              className="relative max-h-full p-8 overflow-y-scroll bg-white modal rounded-3xl top-1/2 -translate-y-1/2"
              onClick={(e) => e.stopPropagation()}
            >
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

  return mounted ? createPortal(modalContent, ref.current) : null;
};
