import './ListItem.scss';
import {useState} from 'react';
import Textarea from '../Textarea/Textarea'

interface ListItemProps {
  title: string;
  completed?: boolean;
  toggleCompleted: (id: number) => void;
  deleteItem: (id: number) => void
  editItem: (title: string) => void
  id: number;
}

const ListItem = ({
  title,
  completed,
  toggleCompleted,
  id,
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
     editItem(inputValue);
     setEditing(false);
    };

    return(
  <div className="item-wrapper">
    <div className={completed ? 'completed' : ''}>
      {!isEditing ? (
        <>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(id)}
      /> {' '}
      {title}
        <div className='buttons-wrapper'>
          <button className= "button" onClick={() => deleteItem(id)}>Delete</button>
          <button className= "button" onClick={() => setEditing(true)}>Edit</button>
      </div>
      </>
      ): (
        <>
      <Textarea value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        <div className='buttons-wrapper'>
          <button className= "button" onClick={() => handleSave()}>Save</button>
          <button className= "button" onClick={() => handleCancel()}>Cancel</button>
      </div>
      </>
      )}
    </div>
    </div>
  )
};

export default ListItem;
