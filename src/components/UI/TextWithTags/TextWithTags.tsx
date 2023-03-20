import { FC, useMemo } from 'react';

import classes from './TextWithTags.module.scss';
import isTag from '../../../utils/is-tag';

interface TextWithTags {
  text: string;
}

const TextWithTags: FC<TextWithTags> = ({ text }) => {
  const textArrWithSelection = useMemo(() => {
    const textArr = text.split(' ');

    return textArr.map((word, index) => {
      if (isTag(word)) {
        return <span key={index} className={classes.text_selected}>{word} </span>;
      }

      return word + ' ';
    })
  }, [text]);

  return (
    <p className={classes.text}>
      <span className={classes.text_selected}>Tags Selection: </span>
      {textArrWithSelection}
    </p>
  );
};

export default TextWithTags;