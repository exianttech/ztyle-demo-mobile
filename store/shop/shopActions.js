import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/config/axiosInstance';

// config
import { Constants } from '@/config/constants';

export const getShops = createAsyncThunk(
    'shop/getShops',
    async (_, { rejectWithValue }) => {
        
        try {
            const { data } = await axiosInstance.get(
                Constants.url_shops
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

export const getShopById = createAsyncThunk(
    'shop/getShopById',
    async ({ id }, { rejectWithValue }) => {
        try {
            
            const { data } = await axiosInstance.get(
                `${Constants.url_shops}/${id}`
            )
            if (!data) return null;
            return data

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

export const getShopMenu = createAsyncThunk(
    'shop/getMenu',
    async ({ searchData }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post(
                Constants.url_menu_shops,
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



