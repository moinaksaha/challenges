import React from 'react';
import { render } from 'react-dom';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import { BrowserRouter } from 'react-router-dom'

import App from './containers/App';
import { store } from './store/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// module.hot.accept();
