import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/config/axiosInstance';

// config
import { Constants } from '@/config/constants';

export const getSlots = createAsyncThunk(
    'booking/getSlots',
    async ({ searchData }, { rejectWithValue }) => {
        
        try {
            const { data } = await axiosInstance.post(
                Constants.url_slots,
                searchData
            )
            if (!data) return null;
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

export const addBookingByUser = createAsyncThunk(
    'booking/addBookingByUser',
    async ({ newBooking }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post(
                Constants.url_bookings,
                newBooking
            )
            if (!data) return null;
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

export const getBookingById = createAsyncThunk(
    'booking/getBookingById',
    async ({ id }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get(
                `${Constants.url_bookings}/${id}`
            )
            if (!data) return null;
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

export const getBookingsByUser = createAsyncThunk(
    'booking/getBookingByUser',
    async ({ searchData }, { rejectWithValue }) => {
        
        try {
            const { data } = await axiosInstance.post(
                Constants.url_my_bookings,
                searchData
            )
            if (!data) return null;
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

export const changeBookingStatusByUserById = createAsyncThunk(
    'booking/changeBookingStatusByUser',
    async ({ id, bookingData }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.patch(
                `${Constants.url_bookings}/${id}`,
                bookingData
            )
            if (!data) return null;
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