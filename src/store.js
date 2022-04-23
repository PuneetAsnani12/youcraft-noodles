import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './storeUtilities/reducer';
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: {
        "details":persistedReducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ 
            serializableCheck: {
                ignoredActions: [FLUSH, PAUSE, PURGE, REHYDRATE, REGISTER, PERSIST],
          },
        })
})

let persistor = persistStore(store);

export { store, persistor };
