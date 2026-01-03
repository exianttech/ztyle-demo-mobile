import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/config/axiosInstance';

// config
import { Constants } from '@/config/constants';

export const getBeauticiansByShopId = createAsyncThunk(
    'beauticians/getBeauticiansByShopId',

    async ({ searchData }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post(
                Constants.url_beauticians_by_shop_id,
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

export const getBeauticianById = createAsyncThunk(
    'beautician/getBeauticianById',
    async ({ id }) => {
        
        try {
            const { data } = await axiosInstance.get(
                `${Constants.url_beauticians}/${id}`
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