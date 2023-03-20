import { createContext, FC, ReactNode, useState } from 'react';

import Note from '../models/note';
import localSave from '../utils/local-save';

interface NotesContextObj {
  items: Note[],
  addNote: (title: string, text: string, tags: string[]) => void;
  editNote: (id: string, text: string, title: string, tags: string[]) => void;
  removeNote: (id: string) => void;
}

export const NotesContext = createContext<NotesContextObj>({
  items: [],
  addNote() {},
  editNote() {},
  removeNote() {}
});

interface NotesContextObjProps {
  children: ReactNode[];
}

const NotesContextProvider: FC<NotesContextObjProps> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>(JSON.parse(localStorage.getItem('notes') as string) || []);

  const addNoteHandler = (title: string, text: string, tags: string[]): void => {
    const newNote = new Note(title, text, tags);

    setNotes(prevNotes => {
      const updatedNotes = [...prevNotes, newNote];

      localSave('notes', updatedNotes);

      return updatedNotes;
    });
  };

  const editNoteHandler = (id: string, title: string, text: string, tags: string[]): void => {
    setNotes(prevNotes => {
      const editingNote = prevNotes.find(note => note.id === id) as Note;

      editingNote.title = title;
      editingNote.text = text;
      editingNote.tags = tags;

      localSave('notes', prevNotes);

      return [...prevNotes];
    })
  };

  const removeNoteHandler = (id: string): void => {
    setNotes(prevNotes => {
      const updatedNotes = prevNotes.filter(note => note.id !== id);

      localSave('notes', updatedNotes);

      return updatedNotes;
    });
  };

  const ctxValue: NotesContextObj = {
    items: notes,
    addNote: addNoteHandler,
    editNote: editNoteHandler,
    removeNote: removeNoteHandler
  };

  return <NotesContext.Provider value={ctxValue}>{children}</NotesContext.Provider>
};

export default NotesContextProvider;