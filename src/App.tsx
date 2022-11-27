import React, { useState } from 'react';
import './App.scss';
import Statistics from './components/Statistics/Statistics';
import Textarea from './components/Textarea/Textarea';
import Button from './components/Button/Button';
import List from './components/List/List';
import plusIcon from './assets/plusIcon.svg';
import { connect } from 'react-redux';
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  setDueDate,
} from './redux/actions/todosActios';
import { Todo } from './redux/reducers/toDoReducer/types';
import { AnyAction } from 'redux';

export type Filter = 'all' | 'completed' | 'incomplete';

interface AppProps {
  todos?: Todo[];
  onAddTodo?: (todo: Todo) => AnyAction;
  onToggleTodo?: (todo: Todo[]) => AnyAction;
  onDeleteTodo?: (todo: Todo[]) => AnyAction;
  onEditTodo?: (todo: Todo[]) => AnyAction;
  onSetDueDate?: (todo: Todo[]) => AnyAction;
}
function App({
  todos,
  onAddTodo,
  onToggleTodo,
  onDeleteTodo,
  onEditTodo,
  onSetDueDate,
}: AppProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [filter, setFilter] = useState<Filter>('all');

  const handleSaveEntry = () => {
    if (inputValue.trim() === '') {
      return;
    }
    const id = Math.floor(Math.random() * 999);

    if (onAddTodo) {
      onAddTodo({
        id,
        title: inputValue,
        completed: false,
      });
    }
    setInputValue('');
  };

  const handleSaveEntryOnEnter = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === 'Enter') {
      handleSaveEntry();
    }
  };

  const handleCompletedToggle = (id: number) => {
    if (!todos) {
      return;
    }

    const modifiedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });
    if (onToggleTodo) {
      onToggleTodo(modifiedTodos);
    }
  };

  const handleDeleteItem = (id: number) => {
    if (!todos) {
      return;
    }

    const modifiedTodos = todos.filter((todo) => todo.id !== id);

    if (onDeleteTodo) {
      onDeleteTodo(modifiedTodos);
    }
  };

  const handleEditItem = (id: number, newTitle: string) => {
    if (!todos) {
      return;
    }
    const modifiedTodos = todos.map((todo) => {
      if (id === todo.id) {
        todo.title = newTitle;
        return todo;
      }
      return todo;
    });
    if (onEditTodo) {
      onEditTodo(modifiedTodos);
    }
  };

  const handleSetDueDate = (id: number, dueDate: string) => {
    if (!todos) {
      return;
    }
    const modifiedTodos = todos.map((todo) => {
      if (id === todo.id) {
        todo.dueDate = dueDate;
        return todo;
      }
      return todo;
    });
    if (onSetDueDate) {
      onSetDueDate(modifiedTodos);
    }
  };

  return (
    <div className="wrapper">
      <div className="user-input">
        <div className="add-task">
          <img src={plusIcon} alt="plus-icon" />
          <div className="input-title"> Add task</div>
          <Textarea
            value={inputValue}
            onChange={(event) => setInputValue(event?.target.value)}
            onKeyUp={(event) => handleSaveEntryOnEnter(event)}
          />
        </div>
        <Button onClick={handleSaveEntry}>Save entry</Button>
      </div>
      <hr />
      <Statistics />
      {todos && todos.length > 0 && (
        <div className="list-item">
          <div className="filters">
            <label htmlFor="all">
              <input
                className="filter-item"
                type="radio"
                name="filter"
                value="all"
                id="all"
                checked={filter === 'all'}
                onChange={() => setFilter('all')}
              />{' '}
              Display all
            </label>
            <label htmlFor="completed">
              <input
                className="filter-item"
                type="radio"
                name="filter"
                value="all"
                id="completed"
                checked={filter === 'completed'}
                onChange={() => setFilter('completed')}
              />{' '}
              Display completed
            </label>
            <label htmlFor="incomplete">
              <input
                className="filter-item"
                type="radio"
                name="filter"
                value="all"
                id="incomplete"
                checked={filter === 'incomplete'}
                onChange={() => setFilter('incomplete')}
              />{' '}
              Display incomplete
            </label>
          </div>
          <List
            filter={filter}
            handleCompletedToggle={(id) => handleCompletedToggle(id)}
            handleEditItem={(id, newTitle) => handleEditItem(id, newTitle)}
            handleDeleteItem={(id) => handleDeleteItem(id)}
            handleSetDueDate={(id, dueDate) => handleSetDueDate(id, dueDate)}
          />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  onAddTodo: (todo: Todo) => addTodo(todo),
  onToggleTodo: (todos: Todo[]) => toggleTodo(todos),
  onDeleteTodo: (todos: Todo[]) => deleteTodo(todos),
  onEditTodo: (todos: Todo[]) => editTodo(todos),
  onSetDueDate: (todos: Todo[]) => setDueDate(todos),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
