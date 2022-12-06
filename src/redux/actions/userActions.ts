import { User } from '../reducers/UserReducer/types';
import { userConstants } from '../constants/userConstants';
import { ActionCreator, Action } from 'redux';

export const saveUserData: ActionCreator<Action> = (user: User) => ({
  type: userConstants.SAVE_USER_DATA,
  user,
});

export const removeUserData: ActionCreator<Action> = (user: User) => ({
  type: userConstants.REMOVE_USER_DATA,
  user,
});
