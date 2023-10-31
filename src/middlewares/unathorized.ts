import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const redirectMiddleware: Middleware = (store) => (next) => (action) => {
    const STATE = (store.getState() as RootState);

    const tokenState = STATE.token;
    const authState = STATE.auth;
    const currentPath = window.location.pathname;

    if (authState.authenticationStatus === 'AUTH_ERROR'){
        if (currentPath !== '/user/login'){
            window.location.href = '/user/login';
        }   
    }
    
    if ((tokenState.refreshTokenStatus === 'REFRESH_REJECTED')){
        window.location.href = '/user/login';
    }
    return next(action);
};
