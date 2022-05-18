import { configureStore } from '@reduxjs/toolkit'
import routeLinkReducer from './reducers/routeSlice'
// import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
const persistConfig = {
  key: 'root',
  storage,
}
const perReducer=persistReducer(persistConfig,{
  routeLink: routeLinkReducer,
})
// export default configureStore({
//   reducer: persistReducer,
//   // middleware: (getDefaultMiddleware) =>
//   //   getDefaultMiddleware({
//   //     serializableCheck: false,
//   //   }),
// })



const store=configureStore({
  reducer: perReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
})
const persistor = persistStore(store)
export default store
export {store,persistor}

