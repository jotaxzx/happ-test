import React from 'react'
import { useSelector } from 'react-redux';
import { useLastElement } from '../hooks/useLastElement';
import { useRestOfElements } from '../hooks/useRestOfElements';
import '../App.css'

export const Lipidos = () => {

    const { informe } = useSelector(state => state.historial)

    const arr = informe.Perfil_Lipídico || [];

    const ultimoElemento = useLastElement(arr);

    const resto = useRestOfElements(arr);

    const dateFormat = (date) => {
        const newDate =  Date.parse(date).toString().toLocaleString("en-US");

        // return newDate.toLocaleString('en-GB', { timeZone: 'UTC' }).substring(0,10) || ""
        return newDate
        // console.log(newDate)
    }

    return (
        <>
            <div id="collapseOne" className="accordion-collapse collapse show mb-2 " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body  ">
                    <div className='d-flex flex-column '>
                        <h6>Ultimo resultado</h6>
                        <div className='row '>
                            <p>colesterol:  {ultimoElemento.colesterol}  mg/dl</p>
                        </div>
                        <div className='row '>
                            <div className='col'>
                                {ultimoElemento.date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">

                <div className='accordion-body overflow-auto d-flex flex-column '>
                    <div className='row '>
                        <h6 className='py-2'>Historial</h6>
                        <div className='col-6'>

                            {
                                resto.map((item, i) => (
                                    <div key={i}>
                                        <p>{item.date.substr(0, 10)}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='col-6'>

                            {
                                resto.map((item, i) => (
                                    <div key={i}>
                                        <p>colesterol: <strong> {item.colesterol} mg/dl </strong></p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
