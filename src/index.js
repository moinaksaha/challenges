import React from 'react';
import { render } from 'react-dom';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import { BrowserRouter } from 'react-router-dom'

import App from './containers/App';
import { store } from './store/store';


// TODO - MIGRATE THIS - MOINAK

// const store = createStore(function(state, action) {
//   const _state = state == null ? {
//     donate: 0,
//     message: '',
//   } : state;

//   switch (action.type) {
//     case 'UPDATE_TOTAL_DONATE':
//       return Object.assign({}, _state, {
//         donate: _state.donate + action.amount,
//       });
//     case 'UPDATE_MESSAGE':
//       return Object.assign({}, _state, {
//         message: action.message,
//       });

//     default: return _state;
//   }
// });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
