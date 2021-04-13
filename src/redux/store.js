import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducers/userReducer';
import promiseMiddleware from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    userReducer
});

const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)
   
  export default () => {
    let store = createStore(persistedReducer, applyMiddleware(promiseMiddleware))
    let persistor = persistStore(store)
    return { store, persistor }
  }

//export default createStore(rootReducer,  applyMiddleware(promiseMiddleware));