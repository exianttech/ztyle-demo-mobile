import { createSlice } from '@reduxjs/toolkit';

// actions
import {
    getServicePrice,
    getPaymentByBookingId
} from './paymentActions';


const initialState = {
    loading: false,
    paymentDetails: null,
    payments: null,
    currentPayment:null,
    error: null
}

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        resetPayment: () => initialState
    },
    extraReducers: (builder) => {
        builder

            // get service price
            .addCase(getServicePrice.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getServicePrice.fulfilled, (state, { payload }) => {
                state.loading = false
                state.paymentDetails = payload
                state.error=null
            })
            .addCase(getServicePrice.rejected, (state, { payload }) => {
                state.loading = false
                state.paymentDetails = null
                state.error = payload
            })

            // get payment by booking id    
            .addCase(getPaymentByBookingId.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getPaymentByBookingId.fulfilled, (state, { payload }) => {
                state.loading = false
                state.currentPayment = payload
                state.error = null
            })
            .addCase(getPaymentByBookingId.rejected, (state, { payload }) => {
                state.loading = false
                state.currentPayment = null
                state.error = payload
            })
        
        
    }
})

export const { resetPayment } = paymentSlice.actions;
export default paymentSlice.reducer
