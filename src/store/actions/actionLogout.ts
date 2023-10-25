// userSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from '../actions/actionAuthentication'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      logout: (state) => {
        localStorage.removeItem('userToken') // deletes token from storage
        state.loading = false
        state.userInfo = null
        state.userToken = null
        state.error = null
      },
    },
    extraReducers: {
      // userLogin reducer
        [userLogin.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },

        [userLogin.fulfilled.type]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken
        },

        [userLogin.rejected.type]: (state, { payload }) => {
            state.loading = false
            state.error = payload as any
        }
     
    },
  })
  // export actions
  export const { logout } = userSlice.actions
  export default userSlice.reducer