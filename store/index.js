import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

// reducers
import authReducer from './auth/authSlice';



// combine all reducers to single 
const rootReducer = combineReducers({
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production', // 🔥 Enables Redux DevTools in development
})

