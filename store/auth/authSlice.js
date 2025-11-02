import { createSlice } from '@reduxjs/toolkit';

// actions
import {
    registerUser,
    userLogin,
    requestResetPassword
} from './authActions'

const initialState = {
    loading: false,
    userInfo: null,
    token: null,
    error: null,
    success: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuth: () => initialState
    },
    extraReducers: (builder) => {
        builder

            // register
            .addCase(registerUser.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false
                state.success = true
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.success = false
            })
        
            // login 
            .addCase(userLogin.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userInfo = payload
                state.token = payload.token
                state.error = null
                state.success = false
            })
            .addCase(userLogin.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload
                state.success = false
            })
            
            // request reset
            .addCase(requestResetPassword.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(requestResetPassword.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.message = payload.message
                state.error = false
                state.success = false
            })
            .addCase(requestResetPassword.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.success = false
            })
        
        
    }

})

export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;
