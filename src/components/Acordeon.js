import React, { useState } from 'react'
import '../App.css'

// { name, content, target, heading, controls }
const Acordeon = ({ data }) => {

    const [accordion, setstate] = useState(data);

    return (

                    <div className="accordion  vh-100" id="accordionExample">
                        <div className="accordion-item border border border-white py-3 ">
                            {
                                accordion.map(item => (

                                    <>
                                        <h2 className="accordion-header " id={item.heading}>
                                            <button className="accordion-button text-white mt-4 py-4 " type="button" data-bs-toggle="collapse" data-bs-target={item.target} aria-expanded="true" aria-controls={item.controls}>
                                                {/* {name} */}
                                                {item.name}
                                            </button>
                                        </h2>
                                        {item.content()}
                                    </>
                                ))
                            }
                        </div>
                    </div>

    )
}

export default Acordeon