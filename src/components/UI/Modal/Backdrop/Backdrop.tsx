import { FC } from 'react';

import classes from './Backdrop.module.scss';

interface BackdropProps {
  onClose: () => void;
}

const Backdrop: FC<BackdropProps> = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}/>
};

export default Backdrop;