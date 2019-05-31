import React from 'react';
import AppNavigator from './AppNavigator';

import { Provider } from 'react-redux';

import store from './redux/store'


export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }

}
