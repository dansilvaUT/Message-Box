import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducers/userReducer';
import chatGroupReducer from './reducers/chatGroupReducer';
import promiseMiddleware from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  userReducer,
  chatGroupReducer
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, applyMiddleware(promiseMiddleware));
let persistor = persistStore(store);
export { store, persistor }
