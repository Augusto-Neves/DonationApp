import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {User} from './reducers/User';
import {persistReducer, persistStore} from 'redux-persist';
import {Categories} from './reducers/Categories';
import {Donations} from './reducers/Donations';

const rootReducer = combineReducers({
  user: User.reducer,
  categories: Categories.reducer,
  donations: Donations.reducer,
});

const configurations = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configurations, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persister = persistStore(store);
