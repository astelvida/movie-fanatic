import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
// import reduxUnhandledAction from 'redux-unhandled-action';
import immutableMid from 'redux-immutable-state-invariant';

// import devToolsEnhancer from 'remote-redux-devtools';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

// const cb = (action) => console.log(`${action} didn't lead to creation of a new state object`);
// reduxUnhandledAction(cb)

const composeEnhancers = composeWithDevTools({ realtime: true });
// const middlewares = [immutableMid(), thunk];
const middlewares = [immutableMid(), thunk, logger()];
const store = createStore(reducer,
  composeEnhancers(applyMiddleware(...middlewares),
));

export default store;
