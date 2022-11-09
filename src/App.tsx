import React, {useState, useEffect} from 'react';
import './App.scss';
import Textarea from './components/Textarea/Textarea';
import Button from './components/Button/Button';
import List from './components/List/List'
import plusIcon from './assets/plusIcon.svg'

export interface Entry {
  id: number;
  title: string;
  completed?: boolean;
  dueDate?: string;

}

export type Filter = 'all' | 'completed' | 'incomplete'

function App() {
  const [inputValue, setInputValue] = useState<string>("")
  const [entries, setEntry] = useState<Entry[]>([])
  const [filter, setFilter] = useState<Filter>('all')


  const handleSaveEntry = () => {
    if (inputValue.trim() === '') {
      return
    }
    const id = Math.floor(Math.random() * 999)

   setEntry(prevState => (
   [
    ...prevState,
    {
      id,
      title: inputValue,
      completed: false
    }
   ]
   ));

   setInputValue("");
  };

  const handleCompletedToggle = (id: number) => {
    const modifiedState = entries.map((entry) => {
      if (entry.id === id) {
        entry.completed = !entry.completed
        return entry;
      }
      return entry;
    })
    setEntry(modifiedState);
    window.localStorage.setItem('entries', JSON.stringify(entries));
  };

  const handleDeleteItem = (id: number) => {
    const updatedEntries = entries.filter((item) =>
     item.id !== id)
     setEntry(updatedEntries)

     if (updatedEntries.length === 0) {
      window.localStorage.removeItem('entries')
     }
  }

  const handleEditItem = (id: number, newTitle: string) => {
    const modifiedState = entries.map((entry) => {
      if (id === entry.id) {
        entry.title = newTitle
        return entry;
      }
      return entry;
    })
    setEntry(modifiedState);
    window.localStorage.setItem('entries', JSON.stringify(entries));
  }

  const handleSetDueDate = (id: number, dueDate: string) => {
    const modifiedState = entries.map((entry) => {
      if (id === entry.id) {
        entry.dueDate = dueDate
        return entry;
      }
      return entry;
    })
    setEntry(modifiedState);
  }

  useEffect(() => {
    const localEntries = window.localStorage.getItem('entries');
     if(localEntries) {
       const parsedEntries = JSON.parse(localEntries);
       setEntry(parsedEntries);
     }
   },[]);

  useEffect(() => {
     if(entries.length > 0) {
      window.localStorage.setItem('entries', JSON.stringify(entries));
     }
   },[entries]);

  return (
    <div className='wrapper'>
      <div className= 'user-input'>
        <div className= 'add-task'>
          <img src={plusIcon} alt="plus-icon" />
          <div className= 'input-title'> Add task</div>
          <Textarea
            value={inputValue}
            onChange={(event) => setInputValue(event?.target.value)}
          />
        </div>
          <Button
          onClick={handleSaveEntry}
          >Save entry</Button>
      </div>
          {entries.length !== 0 &&
        <div className='list-item'>
          <div className='filters'>
            <label htmlFor='all'>
              <input
              className='filter-item'
              type='radio'
              name='filter'
              value='all'
              id='all'
              checked={filter === 'all'}
              onChange={() => setFilter('all')}
              /> Display all
            </label>
            <label htmlFor='completed'>
              <input
              className='filter-item'
              type='radio'
              name='filter'
              value='all'
              id='completed'
              checked={filter === 'completed'}
              onChange={() => setFilter('completed')}
              /> Display completed
           </label>
            <label htmlFor='incomplete'>
              <input
              className='filter-item'
              type='radio'
              name='filter'
              value='all'
              id='incomplete'
              checked={filter === 'incomplete'}
              onChange={() => setFilter('incomplete')}
              /> Display incomplete
          </label>
        </div>
       <List
        filter={filter}
        entries={entries}
        handleCompletedToggle={(id) => handleCompletedToggle(id)}
        handleEditItem={(id, newTitle) => handleEditItem(id, newTitle)}
        handleDeleteItem={(id) => handleDeleteItem(id)}
        handleSetDueDate={(id, dueDate) => handleSetDueDate(id, dueDate)}
       />
       </div>
      }
     </div>
  );
}

export default App;