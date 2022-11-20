import {persistCombineReducers, persistStore} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import storageSession from 'redux-persist/lib/storage/session';
import { commonReducer } from './common';

const persistConfig = {
    key: 'storage',
    storage: storageSession,
}

const persistReducer = persistCombineReducers(persistConfig, {
    common: commonReducer,
})

export const store = configureStore({
    reducer: persistReducer,
})

export const persistor = persistStore(store);