import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/config/axiosInstance';

// config
import { Constants } from '@/config/constants';

/// shop section

export const getMyShopReview = createAsyncThunk(
    'review/getMyShopReview',
    async ({ searchData }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post(
                Constants.url_my_shop_review,
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

export const addShopReview = createAsyncThunk(
    'review/addShopReview',
    async ({ reviewData }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post(
                Constants.url_shop_reviews,
                reviewData
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

export const editShopReviewById = createAsyncThunk(
    'review/editReviewById',
    async ({ reviewData, id }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.patch(
                `${Constants.url_shop_reviews}/${id}`,
                reviewData
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

export const getShopReviews = createAsyncThunk(
    'review/getShopReviews',
    async ({ id }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get(
                `${Constants.url_shop_reviews_by_user}/${id}`
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

/// beautician section

export const getMyBeauticianReview = createAsyncThunk(
    'review/getMyBeauticianReview',
    async ({ searchData }, { rejectWithValue }) => {
        try {
            const data = await axiosInstance.post(
                Constants.url_my_beautician_review,
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

export const addBeauticianReview = createAsyncThunk(
    'review/addBeauticianReview',
    async ({ reviewData }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post(
                Constants.url_beautician_reviews,
                reviewData
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

export const editBeauticianReviewById = createAsyncThunk(
    'review/editBeauticianReviewById',
    async ({ reviewData, id }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.patch(
                `${Constants.url_beautician_reviews}/${id}`,
                reviewData
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

export const getBeauticianReviews = createAsyncThunk(
    'review/getBeauticianReviews',
    async ({ id }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get(
                `${Constants.url_beautician_reviews_by_user}/${id}`
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