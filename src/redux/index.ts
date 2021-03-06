import {applyMiddleware, createStore} from 'redux';
import {persistReducer} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);
store.subscribe(() => {
  console.log(JSON.stringify(store.getState(), null, 2));
});
export type AppDispatch = typeof store.dispatch;
export default store;
export {persistor};
