import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// urls
import { Constants } from '@/config/constants';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const registerUser = createAsyncThunk(
    'auth/register',

    async ({ fullName, email, password }, { rejectWithValue }) => {
        try {
            
            const { data } = await axios.post(
                Constants.url_register,
                { fullName, email, password },
                config
            )
            return data;
            

        }
        catch (err) {
            if (err.response && err.response.data.message) {
                
                return rejectWithValue(err.response.data.message);
            }
            else {
                return rejectWithValue(err.message);
            }
        }

    }
)

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        
        try {
            const { data } = await axios.post(
                Constants.url_login,
                { email, password },
                config
            )

            return data;
            
        }
        catch (err) {
            if (err.response && err.response.data.message) {
                
                return rejectWithValue(err.response.data.message);
            }
            else {
                return rejectWithValue(err.message);
            }
        }
    }
)

export const requestResetPassword = createAsyncThunk(
    'auth/requestResetPassword',
    async ({ email }, { rejectWithValue }) => {
        try {

            const { data } = await axios.post(
                Constants.url_requestResetPassword,
                { email },
                config
            )

            if (data) {
                return data;
            }
            else {
                return null;
            }
            
        }
        catch (err) {
            if (err.response && err.response.data.message) {
                
                return rejectWithValue(err.response.data.message);
            }
            else {
                return rejectWithValue(err.message);
            }
        }
    }
)