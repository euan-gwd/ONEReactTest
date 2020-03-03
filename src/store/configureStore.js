import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducers';
import { loadProducts } from './actions';
import thunk from 'redux-thunk';

const configureStore = () => {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          trace: true
        })
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(thunk));

  const store = createStore(reducer, enhancer);

  store.dispatch(loadProducts());

  return store;
};

export default configureStore;
