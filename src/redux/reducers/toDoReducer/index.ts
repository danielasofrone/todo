import { todoConstants } from '../../constants/todosConstants';
import { Todo } from './types';
const localTodos = window.localStorage.getItem('todos');
const parsedTodos = localTodos ? JSON.parse(localTodos) : [];

const initialState: Todo[] = parsedTodos;

export default function todos(state = initialState, action: any) {
  switch (action.type) {
    case todoConstants.ADD_TODO: {
      const newTodos = [...state, action.todo];
      window.localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    }
    case todoConstants.TOGGLE_TODO:
    case todoConstants.DELETE_TODO:
    case todoConstants.EDIT_TODO:
    case todoConstants.SET_DUE_DATE: {
      const newTodos = action.todo;
      window.localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    }

    default:
      return state;
  }
}
