import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/reducerAuthentication'
import { authApi } from '../services/api-user'


const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
})

export type AppDispatch = typeof store.dispatch;
export default store;
