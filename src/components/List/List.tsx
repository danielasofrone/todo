import ListItem from "../ListItem/ListItem"
import {Filter} from '../../App'
import {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import {Todo} from '../../redux/reducers/toDoReducer/types'

interface ListProps {
  todos: Todo[]
  filter: Filter
  handleCompletedToggle: (id: number) => void
  handleEditItem: (id: number, title: string) => void
  handleDeleteItem: (id: number) => void
  handleSetDueDate: (id: number, dueDate: string) => void
}

const List = ({
  handleCompletedToggle,
  handleEditItem,
  handleDeleteItem,
  filter,
  handleSetDueDate,
  todos
}: ListProps) => {
    const [filteredEntries, setFilteredEntries]= useState<Todo[]>(todos)

    console.log('Todos are here', todos)
    useEffect(() => {
      let newTodos = todos;

      if (filter === 'completed') {
        newTodos = todos.filter((todo) => todo.completed === true)
      } else if (filter === 'incomplete' ) {
        newTodos = todos.filter((todo) => todo.completed === false)
      }
      setFilteredEntries(newTodos)
    }, 
    [filter, todos])

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

const mapStateToProps = (state: any) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(List);



