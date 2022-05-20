import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

export type OverlayProps = {
  id?: string;
  show: boolean;
};

export const Overlay: FC<OverlayProps> = ({ id, show }) => (
  <CSSTransition
    in={show}
    timeout={300}
    unmountOnExit
    classNames={{
      enter: 'opacity-0',
      enterActive: 'opacity-100 transition-all ease-in-out duration-300',
      exit: 'opacity-0 transition-all ease-in-out duration-300',
    }}
  >
    <div
      id={id}
      className="fixed top-0 bottom-0 left-0 right-0 z-40 w-screen h-screen overflow-hidden overscroll-contain modal__overlay bg-[rgba(0,0,0,0.50)]"
    />
  </CSSTransition>
);
