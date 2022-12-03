import './ListItem.scss';
import { ChangeEvent, useState } from 'react';
import Textarea from '../Textarea/Textarea';

interface ListItemProps {
  title: string;
  dueDate?: string;
  completed?: boolean;
  toggleCompleted: () => void;
  deleteItem: () => void;
  editItem: (title: string) => void;
  setDueDate: (dueDate: string) => void;
}

const ListItem = ({
  title,
  completed,
  toggleCompleted,
  deleteItem,
  editItem,
  setDueDate,
  dueDate,
}: ListItemProps) => {
  const [isEditing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState<string>(title);
  const [dueDateValue, setDueDateValue] = useState<string | undefined>(dueDate);

  const handleChangeDueDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDueDateValue(e.target.value);
    setDueDate(e.target.value);
  };

  const handleCancel = () => {
    setEditing(false);
    setInputValue(title);
  };
  const handleSave = () => {
    editItem(inputValue);
    setEditing(false);
  };

  return (
    <div className="item-wrapper">
      {!isEditing ? (
        <>
          <input
            className="checkbox-input"
            type="checkbox"
            checked={completed}
            onChange={() => toggleCompleted()}
          />{' '}
          <div className={completed ? 'completed' : ''}>
            <div className="text-wrapper">{title}</div>
          </div>
          <div className="buttons-container">
            <button className="button" onClick={() => setEditing(true)}>
              Edit
            </button>
            <button className="button" onClick={() => deleteItem()}>
              Delete
            </button>
            <input
              className="due-date"
              type="date"
              value={dueDateValue}
              onChange={(e) => handleChangeDueDate(e)}
            />
          </div>
        </>
      ) : (
        <>
          <Textarea
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <div className="buttons-container">
            <button className="button" onClick={() => handleSave()}>
              Save
            </button>
            <button className="button" onClick={() => handleCancel()}>
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
