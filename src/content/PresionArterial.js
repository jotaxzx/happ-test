import React from 'react'
import { useSelector } from 'react-redux';
import { useLastElement } from '../hooks/useLastElement';
import { useRestOfElements } from '../hooks/useRestOfElements';

export const PresionArterial = () => {

    const { informe } = useSelector(state => state.historial)

    const arr = informe.Presion_arterial || [];

    const ultimoElemento = useLastElement(arr);

    const resto = useRestOfElements(arr);

    return (
        <>
            <div id="collapseTwo" className="accordion-collapse collapse mb-2" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body ">
                    <div className='d-flex flex-column'>
                        <h6>Ultimo resultado</h6>
                        <div className='row'>
                            <p>diastole: {ultimoElemento.diastolica_bi}</p>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                {ultimoElemento.date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className='accordion-body overflow-auto d-flex flex-column'>
                    <div className='row'>
                        <h6 className='py-2'>Historial</h6>
                    <div className='col-6 col-md-8'>
                        {
                            resto.map((item, i) => (
                                <div key={i}>
                                    <p>{item.date.substr(0, 10)}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='col-6 col-md-4'>
                        {
                            resto.map((item, i) => (
                                <div key={i} className='d-flex w-75 flex-row justify-content-evenly'>
                                    <p>sistolica: <strong> {item.sistolica_bi}  </strong></p>
                                    <p>diastolica: <strong> {item.diastolica_bi}  </strong></p>
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
