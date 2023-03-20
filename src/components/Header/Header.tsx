import { FC } from 'react';

import classes from './Header.module.scss';
import useModal from '../../hooks/use-modal';
import EditingModal from '../EditingModal/EditingModal';

const Header: FC = () => {
  const { isModalShown, showModalHandler, hideModalHandler } = useModal();

  return (
    <>
      {isModalShown && <EditingModal onHideModal={hideModalHandler}/>}
      <header className={classes.header}>
        <h1>ReactNotes</h1>
        <button
          className={classes.header__button}
          onClick={showModalHandler}>
          Create Note
        </button>
      </header>
    </>
  );
};

export default Header;