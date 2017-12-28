import navReducer from "./modules/nav";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const reducers = {
    navReducer: navReducer
}

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
        combineReducers(reducers), 
        {},
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);   


if (module.hot) {
    module.hot.accept('../redux', () => {
        const nextRootReducer = require('../redux/store');
        store.replaceReducer(nextRootReducer);
    });
}

export default store;