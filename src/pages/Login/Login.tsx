import { signInWithRedirect } from 'firebase/auth';
import { auth, gitHubProvider } from '../../firebase';

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <button onClick={() => signInWithRedirect(auth, gitHubProvider)}>
        Login with GitHub
      </button>
    </>
  );
};

export default Login;
