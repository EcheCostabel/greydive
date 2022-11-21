import React, { useEffect, useState } from 'react'
import db from '../api/db.json'
import { useParams } from 'react-router-dom';
import { Player } from 'video-react';
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
        <h1>{item.cliente}</h1>
        <h1>Test: Test de usabilidad en el sitio web</h1>
        <h2>Testeador {index+1}</h2>
        <Player fluid={false} width={1300} height={1100} src={item.linkVideo} playsInline={false}/>
        <p id='text'>{item.transcripcion}</p>
        <h2>Tareas</h2>
        <h3>Escenario: {item.escenario}</h3>
        <hr/>
        {item.preguntas?.map(( item, index) => <Tarea key={item.texto} item={item} index={index}/>)}
    </div>
  )
}

export default Testeador