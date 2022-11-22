import React, { useEffect, useState } from 'react'
import json from '../../api/db.json'
import ReactPlayer from "react-player";
import { useParams } from 'react-router-dom';
import Tarea from '../Tarea/Tarea';
import './Testeador.css'

const Testeador = () => {
  const params = useParams()
  const [item, setItem] = useState({})
  let index = json.findIndex(item => item.cliente === params.testeador)

  useEffect(() => {
    let element = json.find(item => item.cliente === params.testeador)
    setItem(element)
  }, [params])

  return (
    <div className='tester'>
      <h1 className='nombreCliente'>{item.cliente}</h1>
      <h1 className='nombretest'>Test: Test de usabilidad en el sitio web</h1><br />
      <h2 className='testeadorr'>Testeador {index + 1}</h2>


      
      <ReactPlayer
            className="video"
            url={item.linkVideo}
            controls={true}
            width='90%'
            heigth='100%'
          />
        

      <h1 className='titulotranscripcion'>Transcripción</h1>

      {/* Ingreso como Html ya que tienen etiquetas br, y asi utilizarlas */}


      <p id='text' className='transcripcion'
        dangerouslySetInnerHTML={{
          __html: item.transcripcion,
        }}
      ></p>

      <h2 className='tareas'>Tareas</h2>
      <h3 className='escenario'>Escenario: {item.escenario}</h3>
      <hr />
      {item.preguntas?.map((item, index) => <Tarea key={item.index} item={item} index={index} />)}
    </div>
  )
}

export default Testeador