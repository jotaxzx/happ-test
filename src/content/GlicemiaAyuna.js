import React from 'react'
import { useSelector } from 'react-redux';
import { useLastElement } from '../hooks/useLastElement';
import { useRestOfElements } from '../hooks/useRestOfElements';

export const GlicemiaAyuna = () => {

    const { informe } = useSelector(state => state.historial)

    const arr = informe.Glicemia_en_ayunas || [];

    const ultimoElemento = useLastElement(arr);

    const resto = useRestOfElements(arr);

    return (
        <>
            <div id="collapseThree" className="accordion-collapse collapse  mb-2" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body ">
                    <div className='d-flex flex-column'>
                        <h6>Ultimo resultado</h6>
                        <div className='row'>
                            <p>Glicemia: {ultimoElemento.glicemia} </p>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                {ultimoElemento.date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="collapseThree" className="accordion-collapse collapse " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className='accordion-body overflow-auto d-flex flex-column '>
                    <div className='row'>
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
                                        <p>Glicemia: <strong>{item.glicemia}</strong></p>

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
