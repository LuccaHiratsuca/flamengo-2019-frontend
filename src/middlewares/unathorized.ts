import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '../store';


export const redirectMiddleware: Middleware = (store) => (next) => (action) => {
    const currentState = store.getState() as RootState;
    const { token, auth } = currentState;
    const currentPath = window.location.pathname;


    if (auth.authenticationStatus === 'AUTH_ERROR' && currentPath !== '/user/login') {
      window.location.href = '/user/login';
    }
  
    if (token.refreshTokenStatus === 'REFRESH_REJECTED' && currentPath !== '/user/login') {
      window.location.href = '/user/login';
    }
  
    return next(action);
  };
