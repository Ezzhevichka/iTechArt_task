import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { reducer } from './reducer';
import App from './App';
import thunk from 'redux-thunk';

const ConnectedApp = connect((state) => {
  console.log(state);
  return state;
})(App);

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);