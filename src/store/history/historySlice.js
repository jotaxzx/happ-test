import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
    name: 'historial',
    initialState: {
        status: 'checking',
        lipidos: [],
        presionArterial: [],
        glicemiaAyuna: [],
        imc: [],
        circunferenciaAbdominal: [],
        informe: {}
    },
    reducers: {
        exams: (state, action) => {
            state.status = 'ok';
            state.lipidos = action.payload.informe.Perfil_Lipídico;
            state.presionArterial = action.payload.informe.Presion_arterial;
            state.glicemiaAyuna = action.payload.informe.Glicemia_en_ayunas;
            state.imc = action.payload.informe.Imc;
            state.circunferenciaAbdominal = action.payload.informe.Circunferencia_abdominal;
            state.informe = action.payload.informe;
        },
    }
})

export const { exams } = historySlice.actions;