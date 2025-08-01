import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import eventsReducer from './eventsSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    events: eventsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
