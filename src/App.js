import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { SignedOut } from './router';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SignedOut />
      </Provider>
    );
  }
}

