import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import User from './reducers/User';
// import { logger } from 'redux-logger';
import Categories from './reducers/Categories';
import Donations from './reducers/Donations';

const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donations: Donations,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const Store = configureStore({
  reducer: persistedReducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

const persistor = persistStore(Store);
export { persistor };
export default Store;
