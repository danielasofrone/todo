import todoReducer from './toDoReducer';
import { combineReducers } from 'redux';
import { Todo } from './toDoReducer/types';
import { User } from './UserReducer/types';
import userReducer from './UserReducer';

export type Store = {
  todos: Todo[];
  user: User;
};

const combinedReducers = combineReducers<Store>({
  todos: todoReducer,
  user: userReducer,
});

export default combinedReducers;
