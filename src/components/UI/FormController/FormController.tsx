import { ChangeEvent, FC, memo } from 'react';

import classes from './FormController.module.scss';

interface Input {
  id: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface FormControllerProps {
  label: string;
  input: Input;
}

const FormController: FC<FormControllerProps> = ({
                                                   label,
                                                   input
                                                 }) => {
  return (
    <div className={classes['form-controller']}>
      <label
        htmlFor={input.id}
        className={classes['form-controller__label']}
      >
        {label}
      </label>
      <input
        className={classes['form-controller__input']}
        {...input}
      />
    </div>
  );
};

export default memo(FormController);