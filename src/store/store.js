import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {User} from './reducers/User';
import {persistReducer, persistStore} from 'redux-persist';

const rootReducer = combineReducers({
  user: User.reducer,
});

const configurations = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(configurations, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persister = persistStore(store);
