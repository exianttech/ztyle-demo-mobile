import { createSlice } from '@reduxjs/toolkit';

// actions
import {
    getMyShopReview,
    addShopReview,
    editShopReviewById,
    getShopReviews,
    getMyBeauticianReview,
    addBeauticianReview,
    editBeauticianReviewById,
    getBeauticianReviews
} from './reviewActions'

const initialState = {
    loading: false,
    shopReviews: null,
    currentShopReview: null,
    beauticianReviews: null,
    currentBeauticianReview: null,
    error: null,
    success:false
}

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        resetReview: () => initialState
    },
    extraReducers: (builder) => {
        builder

            /// shop section
            
            // get my shop review
            .addCase(getMyShopReview.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(getMyShopReview.fulfilled, (state, { payload }) => {
                state.loading = false
                state.currentShopReview = payload
                state.error = null
                state.success = false
            })
            .addCase(getMyShopReview.rejected, (state, { payload }) => {
                state.loading = false
                state.currentShopReview = null
                state.error = payload
                state.success = false
            })
            // add shop review
            .addCase(addShopReview.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(addShopReview.fulfilled, (state, { payload }) => {
                state.loading = false
                state.currentShopReview = payload
                state.error = null
                state.success = true
            })
            .addCase(addShopReview.rejected, (state, { payload }) => {
                state.loading = false
                state.currentShopReview = null
                state.error = payload
                state.success = false
            })
            // edit shop review by id
            .addCase(editShopReviewById.pending, (state) => {
                state.loading = true
                state.error = null
                state.success
            })
            .addCase(editShopReviewById.fulfilled, (state, { payload }) => {
                state.loading = false
                state.currentShopReview = payload
                state.error = null
                state.success = true
            })
            .addCase(editShopReviewById.rejected, (state, { payload }) => {
                state.loading = false
                state.currentShopReview = null
                state.error = payload
                state.success = false
            })
            // get shop reviews
            .addCase(getShopReviews.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(getShopReviews.fulfilled, (state, { payload }) => {
                state.loading = false
                state.shopReviews = payload
                state.error = null
                state.success = false
            })
            .addCase(getShopReviews.rejected, (state, { payload }) => {
                state.loading = false
                state.shopReviews = null
                state.error = payload
                state.success = false
            })
        
            /// beautician section
    
            // get my beautician review
            .addCase(getMyBeauticianReview.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(getMyBeauticianReview.fulfilled, (state, { payload }) => {
                state.loading = false
                state.currentBeauticianReview = payload
                state.error=null
                state.success = false
            })
            .addCase(getMyBeauticianReview.rejected, (state, { payload }) => {
                state.loading = false
                state.currentBeauticianReview = null
                state.error = payload
                state.success = false
            })
            // add beautician review
            .addCase(addBeauticianReview.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(addBeauticianReview.fulfilled, (state, { payload }) => {
                state.loading = false
                state.currentBeauticianReview = payload
                state.error = null
                state.success = true
            })
            .addCase(addBeauticianReview.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.success = false
            })
            // edit beautician review by id
            .addCase(editBeauticianReviewById.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(editBeauticianReviewById.fulfilled, (state, { payload }) => {
                state.loading = false
                state.currentBeauticianReview = payload
                state.error = null
                state.success = true
            })
            .addCase(editBeauticianReviewById.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.success = false
            })
            // get beautician reviews
            .addCase(getBeauticianReviews.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(getBeauticianReviews.fulfilled, (state, { payload }) => {
                state.loading = false
                state.beauticianReviews = payload
                state.error = null
                state.success = false
            })
            .addCase(getBeauticianReviews.rejected, (state, { payload }) => {
                state.loading = false
                state.beauticianReviews = null
                state.error = payload
                state.success = false
            })
        
    }
})

export const { resetReview } = reviewSlice.actions;
export default reviewSlice.reducer