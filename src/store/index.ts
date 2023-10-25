import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist'
import authReducer from './reducers/reducerAuthentication'
import { authApi } from '../services/api-user'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'] // only auth will be persisted
}

const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions: ['persist/PERSIST'],
      }
    }).concat(authApi.middleware),
})

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch

export default store