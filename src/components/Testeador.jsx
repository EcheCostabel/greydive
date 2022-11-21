import React, { useEffect, useState } from 'react'
import db from '../api/db.json'
import { useParams } from 'react-router-dom';
import Tarea from './Tarea';
import './Testeador.css'

const Testeador = () => {
    const params = useParams()
    const [item, setItem] = useState({})
    let index = db.findIndex(item => item.cliente === params.testeador)

    useEffect(() => {
      let route = db.find(item => item.cliente === params.testeador)
      setItem(route)
    }, [params])
    
  return (
    <div className='tester'>
        <h1 className='nombreCliente'>{item.cliente}</h1>
        <h1 className='nombretest'>Test: Test de usabilidad en el sitio web</h1><br />
        <h2 className='testeadorr'>Testeador {index+1}</h2>
      
        <video fluid src={item.linkVideo} data-active={true} controls={true} width={1080} height={660} className='video'/>
        <h1 className='titulotranscripcion'>Transcripcion</h1>

        
        <p id='text' className='transcripcion'>{item.transcripcion}</p>
        
        <h2 className='tareas'>Tareas</h2>
        <h3 className='escenario'>Escenario: {item.escenario}</h3>
        <hr/>
        {item.preguntas?.map(( item, index) => <Tarea key={item.texto} item={item} index={index}/>)}
    </div>
  )
}

export default Testeador