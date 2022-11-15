import {Todo} from '../reducers/toDoReducer/types'
import { todoConstants} from '../constants/todosConstants'

export const addTodo = (todo: Todo) =>  {
  return {
    type: todoConstants.ADD_TODO,
    todo
  }
}