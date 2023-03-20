import { FC, useContext } from 'react';

import classes from './NoteItem.module.scss';
import Note from '../../../../models/note';
import { NotesContext } from '../../../../store/store';
import EditingModal from '../../../EditingModal/EditingModal';
import useModal from '../../../../hooks/use-modal';

interface NoteItem {
  noteObj: Note;
}

const NoteItem: FC<NoteItem> = ({ noteObj }) => {
  const notesCtx = useContext(NotesContext);

  const { isModalShown, showModalHandler, hideModalHandler } = useModal();

  const deleteNoteHandler = (): void => {
    notesCtx.removeNote(noteObj.id);
  };

  return (
    <>
      {isModalShown && <EditingModal
        editingObj={{
          id: noteObj.id,
          title: noteObj.title,
          text: noteObj.text,
          tags: noteObj.tags
        }}
        onHideModal={hideModalHandler}
      />}
      <li className={classes.note}>
        <div>
          <h3 className={classes.note__title}>{noteObj.title}</h3>
          <div className={classes.note__text}>{noteObj.text}</div>
        </div>
        <div className={classes.note__actions}>
        <span>
          {new Date(noteObj.timestamp).toLocaleString()}
        </span>
          <button
            className={classes.note__button}
            onClick={showModalHandler}
          >
            Edit
          </button>
          <button
            className={classes.note__button_alt}
            onClick={deleteNoteHandler}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default NoteItem;