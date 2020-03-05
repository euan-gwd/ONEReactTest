import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import Modal from 'react-modal';
import './index.css';

const store = configureStore();

Modal.setAppElement('#app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
