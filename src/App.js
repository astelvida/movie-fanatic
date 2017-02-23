import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import config from '../firebase_config';
import Router from './Router';
import store from './Store';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
