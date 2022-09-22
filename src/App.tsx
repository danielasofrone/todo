import React, {useState} from 'react';
import './App.scss';
import TextInput from './components/TextInput/TextInput';
import Button from './components/Button/Button';

interface Entry {
  title: string;
  completed?: boolean;
}

function App() {
  const [inputValue, setInputValue] = useState<string>("")
  const [entries, setEntry] = useState<Entry[]>([])


  const handleSaveEntry = () => {
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
  }

  return (
    <>
    <h1> Value is {inputValue}</h1>
     <TextInput value={inputValue} type="text" onChange={(event) => setInputValue(event?.target.value)}/>
     <br/>
     <br/>
     <Button onClick={handleSaveEntry}>Save entry</Button>
     <br/>
     <br/>
     <br/>
     <br/>
      {entries.length !== 0 ?
      <ul>
       {entries.map((entry, index)  =>  <li key= {entry.title}>{entry.title}</li>)}
       </ul>
        :
       <p>No Entries yet</p>
      }
     </>
  );
}

export default App;
