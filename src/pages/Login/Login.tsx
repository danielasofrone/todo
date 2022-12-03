import { getAuth, signInWithRedirect, GithubAuthProvider } from 'firebase/auth';
import { app } from '../../firebase.config';
const provider = new GithubAuthProvider();

app();
const auth = getAuth();

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <button onClick={() => signInWithRedirect(auth, provider)}>
        Login with GitHub
      </button>
    </>
  );
};

export default Login;
