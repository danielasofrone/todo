import { Todo } from '../reducers/toDoReducer/types';
import { todoConstants } from '../constants/todosConstants';

export const addTodo = (todo: Todo) => {
  return {
    type: todoConstants.ADD_TODO,
    todo,
  };
};

export const toggleTodo = (todo: Todo[]) => ({
  type: todoConstants.TOGGLE_TODO,
  todo,
});

export const deleteTodo = (todo: Todo[]) => ({
  type: todoConstants.DELETE_TODO,
  todo,
});

export const editTodo = (todo: Todo[]) => ({
  type: todoConstants.EDIT_TODO,
  todo,
});

export const setDueDate = (todo: Todo[]) => ({
  type: todoConstants.SET_DUE_DATE,
  todo,
});
