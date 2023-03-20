import { FC, ReactNode } from 'react';

import classes from './ModalOverlays.module.scss';

interface ModalOverlays {
  children: ReactNode;
}

const ModalOverlays: FC<ModalOverlays> = ({ children })  => {
  return (
    <div className={classes.modal}>
      {children}
    </div>
  );
};

export default ModalOverlays;
