import { FC, useCallback, useContext, useMemo, useState } from 'react';

import classes from './Main.module.scss';
import { NotesContext } from '../../store/store';
import Search from './Search/Search';
import Notes from './Notes/Notes';

const Main: FC = () => {
  const notesCtx = useContext(NotesContext);

  const [tag, setTag] = useState<string>('');

  const filteredNotes = useMemo(() => notesCtx.items.filter(note => note.tags.includes(tag.startsWith('#')
    ? tag
    : `#${tag}`
  )), [tag]);

  const shownNotes = filteredNotes.length
    ? filteredNotes
    : notesCtx.items;

  const changeTagsStrHandler = useCallback((tagStr: string): void => {
    setTag(tagStr);
  }, []);

  return (
    <main className={classes.main}>
      <Search str={tag} onChangeStr={changeTagsStrHandler}/>
      <Notes notes={shownNotes}/>
    </main>
  );
};

export default Main;