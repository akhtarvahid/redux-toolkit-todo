import { configureStore } from '@reduxjs/toolkit'
import userDetail from '../reducers/userDetailSlice'



export const store = configureStore({
  reducer: {
    users: userDetail
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})