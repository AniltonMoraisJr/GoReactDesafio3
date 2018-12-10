import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import Routes from './routes';
import store from './store';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <Routes />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
