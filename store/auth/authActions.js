import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            
            await AsyncStorage.setItem('token', data.token)
            
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
                Constants.url_request_reset_password,
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