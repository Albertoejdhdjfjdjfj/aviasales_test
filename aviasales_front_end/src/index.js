import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './redux/middleware/saga';
import reducer from './redux/reducers/reducer';
import App from './App';

const composeEnhancers = 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'];
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <>
    <App />
    </>
    
  </Provider>
);
