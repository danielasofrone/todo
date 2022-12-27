import { useState } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import App from '../../App';
import Login from './Login';
import { User } from '../../redux/reducers/UserReducer/types';
import { connect } from 'react-redux';
import { saveUserData } from '../../redux/actions/userActions';
import { AnyAction } from 'redux';

type UserControlProps = {
  onSaveUserData?: (user: User) => AnyAction;
};

const UserControl = ({ onSaveUserData }: UserControlProps) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean | undefined>(
    undefined
  );

  onAuthStateChanged(auth, (user) => {
    if (user) {
      let firstName = null;
      if (user.displayName) {
        firstName = user.displayName.split(' ')[0];
      }

      setIsUserLoggedIn(true);

      if (onSaveUserData) {
        onSaveUserData({
          userID: user.uid,
          firstName: firstName,
          email: user.email,
        });
      }
    } else {
      setIsUserLoggedIn(false);
    }
  });
  if (isUserLoggedIn === undefined) return <>Loading...</>;

  return isUserLoggedIn ? <App /> : <Login />;
};

const mapDispatchToProps = {
  onSaveUserData: (user: User) => saveUserData(user),
};

export default connect(null, mapDispatchToProps)(UserControl);
