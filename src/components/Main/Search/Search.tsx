import { ChangeEvent, FC, memo, useCallback, useMemo } from 'react';

import classes from './Seach.module.scss';
import FormController from '../../UI/FormController/FormController';

interface SearchProps {
  str: string;
  onChangeStr: (str: string) => void;
}

const Search: FC<SearchProps> = ({
                                   str,
                                   onChangeStr
                                 }) => {
  const changeSearchStrHandler = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    onChangeStr(event.target.value);
  }, []);

  return (
    <section className={classes.search}>
      <div className={classes.container}>
        <FormController
          label="TagSearch"
          input={useMemo(() => ({
            id: 'search',
            type: 'search',
            value: str,
            onChange: changeSearchStrHandler
          }), [str])}
        />
      </div>
    </section>
  );
};

export default memo(Search);