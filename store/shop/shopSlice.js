import { createSlice } from '@reduxjs/toolkit';


// actions
import {
    getShops,
    getShopById,
    getShopMenu,
} from './shopActions';


const initialState = {
    loading: false,
    menuLoading: false,
    shops: null,
    currentShop: null,
    menu: null,
    error: null
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        resetShop: () => initialState
    },
    extraReducers: (builder) => {
        builder

            // get shops
            .addCase(getShops.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getShops.fulfilled, (state, { payload }) => {
                state.loading = false
                state.shops = payload
                state.error = null
            })
            .addCase(getShops.rejected, (state, { payload }) => {
                state.loading = false
                state.shops = null
                state.error=payload
            })
        
            // get shop by id
            .addCase(getShopById.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getShopById.fulfilled, (state, { payload }) => {
                state.loading = false
                state.currentShop = payload
                state.error = null
            })
            .addCase(getShopById.rejected, (state, { payload }) => {
                state.loading = false
                state.currentShop = null
                state.error = payload
            })
        
            // get menu
            .addCase(getShopMenu.pending, (state) => {
                state.menuLoading = true
                state.error = null
            })
            .addCase(getShopMenu.fulfilled, (state, { payload }) => {
                state.menuLoading = false
                state.menu = payload
                state.error = null
            })
            .addCase(getShopMenu.rejected, (state, { payload }) => {
                state.menuLoading = false
                state.menu = null
                state.error = payload
            })
        
        
    }
    
})

export const { resetShop } = shopSlice.actions;
export default shopSlice.reducer
