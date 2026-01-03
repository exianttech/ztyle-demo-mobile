import { createSlice } from '@reduxjs/toolkit';

// actions
import {
    getSlots,
    addBookingByUser,
    getBookingById,
    getBookingsByUser,
    changeBookingStatusByUserById
} from './bookingActions'

const initialState = {
    loading: false,
    slotDetails: null,
    selectedSlot: null,
    bookings: null,
    currentBooking: null,
    error: null
}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        resetBooking: () => initialState
    },
    extraReducers: (builder) => {
        builder
        
            // get slots
            .addCase(getSlots.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getSlots.fulfilled, (state, { payload }) => {
                state.loading = false
                state.slotDetails = payload
                state.error = null
            })
            .addCase(getSlots.rejected, (state, { payload }) => {
                state.loading = false
                state.slotDetails = null
                state.error = payload
            })
            // add booking
            .addCase(addBookingByUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(addBookingByUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.currentBooking = payload
                state.error = null
            })
            .addCase(addBookingByUser.rejected, (state, { payload }) => {
                state.loading = false
                state.currentBooking = null
                state.error = payload
            })
            // get booking by id
            .addCase(getBookingById.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getBookingById.fulfilled, (state, { payload }) => {
                state.loading = false
                state.currentBooking = payload
                state.error = null
            })
            .addCase(getBookingById.rejected, (state, { payload }) => {
                state.loading = false
                state.currentBooking = null
                state.error = payload
            })
            // get booking by user
            .addCase(getBookingsByUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getBookingsByUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.bookings = payload
                state.error = null
            })
            .addCase(getBookingsByUser.rejected, (state, { payload }) => {
                state.loading = false
                state.bookings = null
                state.error = payload
            })
            // change booking status by user by  id
            .addCase(changeBookingStatusByUserById.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(changeBookingStatusByUserById.fulfilled, (state, { payload }) => {
                state.loading = false
                state.currentBooking = payload
                state.error = null
            })
            .addCase(changeBookingStatusByUserById.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
        
        
    }

})

export const { resetBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
