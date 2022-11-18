import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
    name: 'historial',
    initialState: {
        status: 'checking',
        informe: {}
    },
    reducers: {
        exams: (state, action) => {
            state.status = 'ok';
            state.informe = action.payload.informe;
        },
    }
})

export const { exams } = historySlice.actions;