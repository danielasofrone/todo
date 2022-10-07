import './ListItem.scss';
import {ChangeEvent} from 'react';

interface ListItemProps {
  title: string;
  completed?: boolean;
  toggleCompleted: (index: number) => void;
  deleteItem: (index: number) => void
  editItem: (index: number) => void
  index: number;
}

const ListItem = ({
  title,
  completed,
  toggleCompleted,
  index,
  deleteItem,
  editItem
}: ListItemProps) => (
  <div className="item-wrapper">
    <li className={completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(index)}
      />
      {title}
      <button onClick={() => deleteItem(index)}>Delete</button>
      <button onClick={() => editItem(index)}>Edit</button>
    </li>
  </div>
);

export default ListItem;
