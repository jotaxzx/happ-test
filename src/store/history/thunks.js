import axios from 'axios';
import { exams } from './historySlice'

const baseUrl = 'http://localhost:4000'

export const getExams = () => {

    return async (dispatch, getState) => {

        const res = await axios.get(`${baseUrl}/Perfil_Lipidico`)
        const res1 = await axios.get(`${baseUrl}/Presion_arterial`)
        const res2 = await axios.get(`${baseUrl}/Glicemia_en_ayunas`)
        const res3 = await axios.get(`${baseUrl}/imc`)
        const res4 = await axios.get(`${baseUrl}/Circunferencia_abdominal`)

        const lipidos = res.data;
        const presionArterial = res1.data;
        const glicemiaAyuna = res2.data;
        const imc = res3.data;
        const circunferenciaAbdominal = res4.data;


        const informe = {
            "Perfil_Lipídico": lipidos,
            "Presion_arterial": presionArterial,
            "Glicemia_en_ayunas": glicemiaAyuna,
            "Imc": imc,
            "Circunferencia_abdominal": circunferenciaAbdominal
        }

        dispatch(exams({ informe }));


    }
}