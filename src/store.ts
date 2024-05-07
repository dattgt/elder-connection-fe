import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sessionStorage from 'redux-persist/es/storage/session';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore,
} from 'redux-persist';
import { exampleApi } from './services/example.service';

export const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whitelist: [],
};

const rootReducer = combineReducers({
    [exampleApi.reducerPath]: exampleApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (defaultMiddleware) =>
        defaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(exampleApi.middleware),
});

// get roostate and appdispatch from store handle for typescript
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
//
