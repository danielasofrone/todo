import ListItem from "../ListItem/ListItem"
import {Entry, Filter} from '../../App'
import {useState, useEffect} from 'react'

interface ListProps {
  filter: Filter
  entries: Entry[];
  handleCompletedToggle: (id: number) => void
  handleEditItem: (id: number, title: string) => void
  handleDeleteItem: (id: number) => void
  handleSetDueDate: (id: number, dueDate: string) => void
}

const List = ({
  entries,
  handleCompletedToggle,
  handleEditItem,
  handleDeleteItem,
  filter,
  handleSetDueDate

}: ListProps) => {
    const [filteredEntries, setFilteredEntries]= useState<Entry[]>(entries)

    useEffect(() => {
      let newEntries = entries;

      if (filter === 'completed') {
        newEntries = entries.filter((entry) => entry.completed === true)
      } else if (filter === 'incomplete' ) {
        newEntries = entries.filter((entry) => entry.completed === false)
      }
      setFilteredEntries(newEntries)
    }, 
    [filter, entries])

  return (
    <>
    {filteredEntries.length !== 0 ? (
      <div>
        {filteredEntries.map((entry, index) => (
          <ListItem
            dueDate={entry.dueDate}
            completed= {entry.completed}
            key= {`${index}_${entry.title}`}
            title={entry.title}
            toggleCompleted={() => handleCompletedToggle(entry.id)}
            editItem={(newTitle) => handleEditItem(entry.id, newTitle)}
            deleteItem={() => handleDeleteItem(entry.id)} 
            setDueDate={(dueDate) => handleSetDueDate(entry.id, dueDate) }
          />
        ))}
      </div>
    ) : (
      <p>No entries yet</p>
    )}
    </>
  )
}

export default List;



