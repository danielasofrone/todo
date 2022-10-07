import React, {useState, useEffect} from 'react';
import './App.scss';
import TextInput from './components/TextInput/TextInput';
import Button from './components/Button/Button';
import ListItem from './components/ListItem/ListItem'
import plusIcon from './assets/plusIcon.svg'

interface Entry {
  title: string;
  completed?: boolean;
}

function App() {
  const [inputValue, setInputValue] = useState<string>("")
  const [entries, setEntry] = useState<Entry[]>([])


  const handleSaveEntry = () => {
    if (inputValue.trim() === '') {
      return
    }
   setEntry(prevState => (
   [
    ...prevState,
    {
      title: inputValue,
      completed: false
    }
   ]
   ));

   setInputValue("");
  };

  const handleCompletedToggle = (itemIndex: number) => {
    const modifiedState = entries.map((entry, index) => {
      if (index === itemIndex) {
        entry.completed = !entry.completed
        return entry;
      }
      return entry;
    })
    setEntry(modifiedState);
    window.localStorage.setItem('entries', JSON.stringify(entries));
  };

  const handleDeleteItem = (itemIndex: number) => {
    const updatedEntries = entries.filter((item, index) =>
     index !== itemIndex)
     setEntry(updatedEntries)

     if (updatedEntries.length === 0) {
      window.localStorage.removeItem('entries')
     }
  }

  const handleEditItem = (itemIndex: number) => {
    console.log('edit item', itemIndex)
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
          <TextInput
            value={inputValue}
            type="text"
            onChange={(event) => setInputValue(event?.target.value)}
          />
        </div>
          <Button onClick={handleSaveEntry}>Save entry</Button>
      </div>
          {entries.length !== 0 ?
        <ul>
       {entries.map((entry, index)  =>
       <ListItem
       index={index}
       toggleCompleted={(itemIndex) => handleCompletedToggle(itemIndex)}
       completed= {entry.completed}
       key= {`${index}_${entry.title}`}
       title={entry.title}
       editItem={(itemIndex) => handleEditItem(itemIndex)}
       deleteItem={(itemIndex) => handleDeleteItem(itemIndex)}
       />)}
       </ul>
        :
       <p>No Entries yet</p>
      }
     </div>
  );
}

export default App;
