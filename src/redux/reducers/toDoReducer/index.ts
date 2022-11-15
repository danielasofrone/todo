import { todoConstants } from '../../constants/todosConstants';
import {Todo} from './types'
const localTodos = window.localStorage.getItem('entries')
const parsedTodos = localTodos ? JSON.parse(localTodos) : [];

const initialState: Todo[]= parsedTodos;

export default function todos(state = initialState, action: any) {
  switch (action.type) {
    case todoConstants.ADD_TODO :
      return [
         ...state,
        action.todo
      ]
      default:
      return state;
  }
}