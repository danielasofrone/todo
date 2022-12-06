import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Login from '../src/pages/Login/Login';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore, compose } from 'redux';
import reducers from '../src/redux/reducers';
import { Provider } from 'react-redux';
import { useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const UserControl = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean | undefined>(
    undefined
  );

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  });
  if (isUserLoggedIn === undefined) return <>Loading...</>;

  return isUserLoggedIn ? <App /> : <Login />;
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserControl />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
