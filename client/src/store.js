import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialStare = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialStare,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
