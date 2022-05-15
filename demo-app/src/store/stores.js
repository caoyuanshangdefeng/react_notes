import { configureStore } from '@reduxjs/toolkit'
import routeLinkReducer from './reducers/routeSlice'

export default configureStore({
  reducer: {
    routeLink: routeLinkReducer,
  },
})
