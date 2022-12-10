import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import './Header.scss';

const Header = () => {
  return (
    <div className="header-container">
      <div className="greeting-text">Hello User</div>
      <button onClick={() => signOut(auth)}>Sign out</button>
    </div>
  );
};

export default Header;
