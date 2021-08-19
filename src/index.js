import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './containers/Layout';
import './assets/styles/main.scss';
import StateActionsContextTag from './context/stateContext';
const App = () => {
  return (
    <>
      <Layout />
    </>
  );
};

ReactDOM.render(
  <StateActionsContextTag>
    <App />
  </StateActionsContextTag>,
  document.getElementById('root')
);
