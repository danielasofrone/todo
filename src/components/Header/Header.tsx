import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Header = () => {
  return (
    <>
      Hello User,
      <button onClick={() => signOut(auth)}>Sign out</button>
    </>
  );
};

export default Header;
