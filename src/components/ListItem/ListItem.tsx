import './ListItem.scss'
import {ChangeEvent} from 'react'

interface ListItemProps {
  title: string;
  completed?: boolean;
  toggleCompleted: (index: number) => void;
  index: number;
}

const ListItem = ({title, completed, toggleCompleted, index}: ListItemProps) => 
<div className= 'item-wrapper'>
  <li className={completed ? 'completed' : ''}>
  <input type='checkbox' checked={completed} 
    onChange={() => toggleCompleted(index)}/>
    {title}
  </li>
  </div>

export default ListItem