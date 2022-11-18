import { configureStore } from '@reduxjs/toolkit'
import { historySlice } from './history/historySlice'
// import { authSlice } from './auth/authSlice'
// import { dashboardSlice } from './dashboard/dashboardSlice'

export const store = configureStore({
    reducer:{
        historial: historySlice.reducer,
    },
})