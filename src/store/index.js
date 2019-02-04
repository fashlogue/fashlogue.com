import { default as rootReducer }  from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from "redux-logger";
import reduxThunk from 'redux-thunk';

const devtoolsCompose = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers =
  (process.env.NODE_ENV !== 'production') && (devtoolsCompose || compose);
const enhancer = composeEnhancers(applyMiddleware(reduxThunk),  applyMiddleware(createLogger()));


export default function configureStore() {
    const store = createStore(rootReducer, {}, enhancer);
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
          const nextRootReducer = require('./reducers').default;
          store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}