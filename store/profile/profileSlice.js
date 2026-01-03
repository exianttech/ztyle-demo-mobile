import { createSlice } from '@reduxjs/toolkit';

// actions
import {
    getProfile,
    addProfile,
    updateProfile,
    deleteProfile
} from './profileActions';



const initialState = {
    loading: false,
    profile: null,
    error: null,
    success: false
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        resetProfile: () => initialState
    },
    extraReducers: (builder) => {
        builder

            // get profile 
            .addCase(getProfile.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(getProfile.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.profile = payload
                state.error = null;
                state.success = false
            })
            .addCase(getProfile.rejected, (state, { payload }) => {
                state.loading = false
                state.profile = null
                state.error = payload
                state.success = false
            })
            
            // add profile
            .addCase(addProfile.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(addProfile.fulfilled, (state, { payload }) => {
                state.loading = false
                state.profile = payload
                state.error = null
                state.success = true
            })
            .addCase(addProfile.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.success = false
            })
        
            // update profile
            .addCase(updateProfile.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(updateProfile.fulfilled, (state, { payload }) => {
                state.loading = false
                state.profile = payload
                state.error = null
                state.success = true
            })
            .addCase(updateProfile.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.success = false
            })

            // delete profile
            .addCase(deleteProfile.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(deleteProfile.fulfilled, (state) => {
                state.loading = false
                state.profile = null
                state.error = null
                state.success = true
            })
            .addCase(deleteProfile.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.success = false
            })
        
        
    }

})

export const { resetProfile } = profileSlice.actions;
export default profileSlice.reducer;
