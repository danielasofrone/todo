import ListItem from "../ListItem/ListItem"
interface Entry {
  title: string;
  completed?: boolean;
}

interface ListProps {
  entries: Entry[];
  handleCompletedToggle: (index: number) => void
  handleEditItem: (index: number, title: string) => void
  handleDeleteItem: (index: number) => void;
}

const List = ({
  entries,
  handleCompletedToggle,
  handleEditItem,
  handleDeleteItem
}: ListProps) => {
  return (
    <>
    {entries.length !== 0 ? (
      <ul>
        {entries.map((entry, index) => (
          <ListItem
          index={index}
          completed= {entry.completed}
          key= {`${index}_${entry.title}`}
          title={entry.title}
          toggleCompleted={(itemIndex) => handleCompletedToggle(itemIndex)}
          editItem={(itemIndex, newTitle) => handleEditItem(itemIndex, newTitle)}
          deleteItem={(itemIndex) => handleDeleteItem(itemIndex)} 
          />
        ))}
      </ul>
    ) : (
      <p>No entries yet</p>
    )}
    </>
  )
}

export default List;



