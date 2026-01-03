import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/config/axiosInstance';

// config
import { Constants } from '@/config/constants';

export const getServicePrice = createAsyncThunk(
    'payment/getServicePrice',
    async ({ searchData }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post(
                Constants.url_service_price,
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

export const getPaymentByBookingId = createAsyncThunk(
    'payment/getPaymentByBookingId',
    async ({ id }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get(
                `${Constants.url_payments_by_booking_id}/${id}`
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