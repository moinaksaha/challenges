import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import augmentorMiddleware from './middleware/augmentorMiddleware';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
// import { root } from "postcss";

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  augmentorMiddleware(),
  routerMiddleware(history),
];

// if (process.env.NODE_ENV === "development") {
//   const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

//   if (typeof devToolsExtension === "function") {
//     enhancers.push(devToolsExtension());
//   }
// }

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
);

// enabling hot module replacement
// if (module.hot) {
//   module.hot.accept(() => {
//     // This fetch the new state of the above reducers.
//     const nextRootReducer = require("./reducers");
//     store.replaceReducer(
//       //persistReducer(persistConfig, connectRouter(history)(nextRootReducer))
//       connectRouter(history)(nextRootReducer)
//     );
//   });
// }
// export const persistor = persistStore(store);
