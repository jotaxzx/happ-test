import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import './App.css';
import Acordeon from './components/Acordeon';
import { CircunferenciaAbdominal } from './content/CircunferenciaAbdominal';
import { GlicemiaAyuna } from './content/GlicemiaAyuna';
import { Imc } from './content/Imc';
import { Lipidos } from './content/Lipidos';
import { PresionArterial } from './content/PresionArterial';
import { getExams } from './store/history/thunks';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExams())
  }, []);


  const data = [
    { id: 1, target: "#collapseOne", heading: "headingOne", controls: "collapseOne", name: "Perfil Lipídico", content: () => <Lipidos /> },
    { id: 2, target: "#collapseTwo", heading: "headingTwo", controls: "collapseTwo", name: "Presion arterial", content: () => <PresionArterial /> },
    { id: 3, target: "#collapseThree", heading: "headingThree", controls: "collapseThree", name: "Glicemia en ayunas", content: () => <GlicemiaAyuna /> },
    { id: 4, target: "#collapseFour", heading: "headingFour", controls: "collapseFour", name: "Imc", content: () => <Imc /> },
    { id: 5, target: "#collapseFive", heading: "headingFive", controls: "collapseFive", name: "Circunferencia Abdominal", content: () => <CircunferenciaAbdominal /> }
  ];

  return (

    
      <div className='container mt-5  '>
        <div className="row">
          <div className='col'>
            {/* {data.map((item, index) => (
                <Acordeon key={index} name={item.name} content={item.content} heading={item.heading} target={item.target} controls={item.controls} />))} */}
            <Acordeon data={data} />
          </div>
        </div>
      </div>



  );
}

export default App;
