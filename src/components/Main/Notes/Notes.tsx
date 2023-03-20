import { FC, memo, useMemo } from 'react';

import classes from './Notes.module.scss';
import Note from '../../../models/note';
import Card from '../../UI/Card/Card';
import NoteItem from './NoteItem/NoteItem';

interface NotesProps {
  notes: Note[];
}

const Notes: FC<NotesProps> = ({ notes }) => {
  const notesList = useMemo(() => notes.map(note => <NoteItem
    key={note.id}
    noteObj={note}
  />), [notes]);

  if (!notesList.length) {
    return (
      <section className={classes.message}>
        <h2>No Notes here...</h2>
      </section>
    );
  }

  return (
    <section className={classes.notes}>
      <Card>
        <ul className={classes.notes__list}>{notesList}</ul>
      </Card>
    </section>
  );
};

export default memo(Notes);