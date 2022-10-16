import './ListItem.scss';
import {useState} from 'react';
import TextInput from '../TextInput/TextInput'

interface ListItemProps {
  title: string;
  completed?: boolean;
  toggleCompleted: (index: number) => void;
  deleteItem: (index: number) => void
  editItem: (index: number, title: string) => void
  index: number;
}

const ListItem = ({
  title,
  completed,
  toggleCompleted,
  index,
  deleteItem,
  editItem
}: ListItemProps) => {
    const [isEditing, setEditing] = useState(false)
    const [inputValue, setInputValue] = useState<string>(title)

    const handleCancel = () => {
      setEditing(false);
      setInputValue(title);
    }
    const handleSave = () => {
     editItem(index, inputValue);
     setEditing(false);
    };

    return(
  <div className="item-wrapper">
    <li className={completed ? 'completed' : ''}>
      {!isEditing ? (
        <>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(index)}
      /> {' '}
      {title}
      <div className='buttons-wrapper'>
      <button className= "button" onClick={() => deleteItem(index)}>Delete</button>
      <button className= "button" onClick={() => setEditing(true)}>Edit</button>
      </div>
      </>
      ): (
        <>
      <TextInput value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <div className='buttons-wrapper'>
      <button className= "button" onClick={() => handleSave()}>Save</button>
      <button className= "button" onClick={() => handleCancel()}>Cancel</button>
      </div>
      </>
      )}
    </li>
    </div>
  )
};

export default ListItem;
