import { FC } from 'react';

import classes from './Tag.module.scss';

interface TagProps {
  name: string;
}

const Tag: FC<TagProps> = ({ name }) => {
  return <li className={classes.tag}>{name}</li>;
};

export default Tag;
