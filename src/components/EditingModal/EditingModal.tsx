import { ChangeEvent, FC, FormEvent, memo, useContext, useState } from 'react';

import classes from './EditingModal.module.scss'
import { NotesContext } from '../../store/store';
import Modal from '../UI/Modal/Modal';
import FormController from '../UI/FormController/FormController';
import TextWithTags from '../UI/TextWithTags/TextWithTags';
import isTag from '../../utils/is-tag';
import Tag from './Tag/Tag';

interface EditingObj {
  id: string;
  title: string;
  text: string;
  tags: string[];
}

interface EditionModalProps {
  editingObj?: EditingObj,
  onHideModal: () => void;
}

const EditingModal: FC<EditionModalProps> = ({
                                               editingObj,
                                               onHideModal,
                                             }) => {
  const notesCtx = useContext(NotesContext);

  const [enteredTitle, setEnteredTitle] = useState<string>(editingObj?.title ?? '');
  const [enteredText, setEnteredText] = useState<string>(editingObj?.text ?? '');
  const [enteredTags, setEnteredTags] = useState<string[]>(editingObj?.tags ?? []);

  const isFormValid = enteredTitle.trim() && enteredText.trim();

  const changeTitleInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setEnteredTitle(event.target.value)
  };

  const changeTagsInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const text = event.target.value;

    setEnteredText(text);

    const tags = Array.from(new Set(text.split(' ').filter(word => isTag(word))));

    setEnteredTags(tags);
  };

  const submitHandler = (event: FormEvent): void => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    if (editingObj) {
      notesCtx.editNote(editingObj.id, enteredTitle, enteredText, enteredTags);
    } else {
      notesCtx.addNote(enteredTitle, enteredText, enteredTags);
    }

    onHideModal();
  };

  const modalPurposeStr = `${editingObj ? 'Edit' : 'Create'} Note`;

  const tagsList = enteredTags.map(tag => <Tag
      key={tag}
      name={tag}
    />
  );

  return (
    <Modal onClose={onHideModal}>
      <h2 className={classes.title}>{modalPurposeStr}</h2>
      {editingObj && <TextWithTags text={editingObj.text}/>}
      <form onSubmit={submitHandler}>
        <FormController
          label="Title"
          input={{
            id: 'title',
            type: 'text',
            value: enteredTitle,
            onChange: changeTitleInputHandler
          }}
        />
        <FormController
          label="Text"
          input={{
            id: 'text',
            type: 'text',
            value: enteredText,
            onChange: changeTagsInputHandler
          }}
        />
        <ul className={classes.tags}>{tagsList}</ul>
        <div className={classes.actions}>
          <button
            className={classes.actions__button_alt}
            type="button"
            onClick={onHideModal}
          >
            Close
          </button>
          <button
            className={classes.actions__button}
            type="submit"
            disabled={!isFormValid}
          >
            {modalPurposeStr}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default memo(EditingModal);