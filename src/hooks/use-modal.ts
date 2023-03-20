import { useCallback, useContext, useState } from 'react';

interface useModalReturnValue {
  isModalShown: boolean;
  showModalHandler: () => void;
  hideModalHandler: () => void;
}

const useModal = (): useModalReturnValue  => {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);

  const showModalHandler = useCallback((): void => {
    setIsModalShown(true);
  }, []);

  const hideModalHandler = useCallback((): void => {
    setIsModalShown(false);
  }, []);

  return {
    isModalShown,
    showModalHandler,
    hideModalHandler
  };
};

export default useModal;
