import todoReducer from './toDoReducer'
import {combineReducers} from 'redux'


const combinedReducers = combineReducers({
  todos: todoReducer,
})

export default combinedReducers;