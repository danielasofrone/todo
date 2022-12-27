import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import './Header.scss';
import { User } from '../../redux/reducers/UserReducer/types';
import { connect } from 'react-redux';
import { Store } from '../../redux/reducers';

interface HeaderProps {
  user?: User;
}

const Header = ({ user }: HeaderProps) => {
  let userName = user?.email ? user.email : 'User';

  if (user && user.firstName) {
    userName = user.firstName;
  }
  return (
    <div className="header-container">
      <div className="greeting-text">Hello {userName}</div>
      <button className="signout-button" onClick={() => signOut(auth)}>
        Sign out
      </button>
    </div>
  );
};

const mapStateToProps = (state: Store) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
