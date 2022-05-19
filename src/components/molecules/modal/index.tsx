import { FC, useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

export type ModalProps = {
  // id: string;
  ariaLabel?: string;
  className?: string;
  show: boolean;
  onClose?: () => void;
};

export const Modal: FC<ModalProps> = ({ show, ariaLabel, className, children }) => {
  const ref = useRef<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);

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

  const modalContent = show ? (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 z-40 w-screen h-screen overflow-hidden bg-[rgba(0,0,0,0.50)]" />
      <div
        aria-modal
        aria-labelledby="modal-label"
        role="dialog"
        tabIndex={-1}
        className={classNames('fixed top-0 left-0 z-50 w-full h-full overflow-hidden outline-0', className)}
      >
        <h2 id="modal-label" className="sr-only">
          {ariaLabel}
        </h2>

        <div className="relative z-10 h-full k-container max-h-[calc(100%-137px)] mt-[68.5px]">
          <div className="relative max-h-full p-8 overflow-y-scroll bg-white rounded-3xl top-1/2 -translate-y-1/2">
            {children}
          </div>
        </div>
      </div>
    </>
  ) : null;

  return mounted ? createPortal(modalContent, ref.current) : null;
};
