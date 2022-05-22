import { configureStore } from '@reduxjs/toolkit'
import routeLinkReducer from './reducers/routeSlice'
import { combineReducers } from "redux"
// import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer
} from 'redux-persist'
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    routeLink: routeLinkReducer,
  })
)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export const persistor = persistStore(store)


// export const store = configureStore({
//   reducer: {
//     routeLink: routeLinkReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// })
