import { FC } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop/Backdrop';
import ModalOverlays from './ModalOverlays/ModalOverlays';

const portalEl = document.getElementById('overlays') as HTMLElement;

const Modal: FC<{ onClose: () => void, children: any }> = props => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalEl)}
      {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalEl)}
    </>
  );
};

export default Modal;