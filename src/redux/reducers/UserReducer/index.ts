import { userConstants } from '../../constants/userConstants';
import { User } from './types';
import { AnyAction } from 'redux';

const initialState: User = {
  userID: '',
  firstName: '',
  email: '',
};

export default function user(state = initialState, action: AnyAction) {
  switch (action.type) {
    case userConstants.SAVE_USER_DATA:
      return action.user;

    case userConstants.REMOVE_USER_DATA:
      return action.user;

    default:
      return state;
  }
}
