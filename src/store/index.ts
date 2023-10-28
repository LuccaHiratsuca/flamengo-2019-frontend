import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { authReducer } from './reducers/reducerAuthentication';
import { authApi } from '../services/api-user';
import { rentalApi } from '../services/api-rental';
import { redirectMiddleware } from '../middlewares/unathorized';
import { tokenReducer } from './reducers/reducerToken';
import { rentalsReducer } from './reducers/reducerRentals';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'token'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  token: tokenReducer,
  rentals: rentalsReducer,
  [authApi.reducerPath]: authApi.reducer,
  [rentalApi.reducerPath]: rentalApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    })
    .concat(authApi.middleware)
    .concat(redirectMiddleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
