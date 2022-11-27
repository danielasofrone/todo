import todoReducer from './toDoReducer';
import { combineReducers } from 'redux';
import { Todo } from './toDoReducer/types';

export type Store = {
  todos: Todo[];
};

const combinedReducers = combineReducers<Store>({
  todos: todoReducer,
});

export default combinedReducers;
