import './config/reactotron';
import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import GlobalStyle from './styles/global';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer autoClose={8000} />
        <GlobalStyle />
        <Provider store={store}>
          <Routes />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
