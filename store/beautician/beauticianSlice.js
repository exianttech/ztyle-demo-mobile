import { createSlice } from '@reduxjs/toolkit';

// actions
import {
    getBeauticiansByShopId,
    getBeauticianById
} from './beauticianActions'

const initialState = {
    loading: false,
    beauticians: null,
    currentBeautician: null,
    error: null
}

const beauticianSlice = createSlice({
    name: 'beautician',
    initialState,
    reducers: {
        resetBeautician: () => initialState
    },
    extraReducers: (builder) => {
        builder 

            // get beauticians by shop id
            .addCase(getBeauticiansByShopId.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getBeauticiansByShopId.fulfilled, (state, { payload }) => {
                state.loading = false
                state.beauticians = payload
                state.error = null
            })
            .addCase(getBeauticiansByShopId.rejected, (state, { payload }) => {
                state.loading = false
                state.beauticians = null
                state.error = payload
            })
        
            // get beautician by id
            .addCase(getBeauticianById.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getBeauticianById.fulfilled, (state, { payload }) => {
                state.loading = false
                state.currentBeautician = payload
                state.error = null
            })
            .addCase(getBeauticianById.rejected, (state, { payload }) => {
                state.loading = false
                state.currentBeautician = null
                state.error = payload
            })
        
        
    }

})

export const { resetBeautician } = beauticianSlice.actions;
export default beauticianSlice.reducer
