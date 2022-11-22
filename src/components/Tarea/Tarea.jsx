import React from 'react'
import './Tarea.css'



const Tarea = ({item, index}) => {
  
  return (
    <div className='tareaa'>
        <p className='tarea'>Tarea {index+1}:</p>
        <h6 className='tarea'> {item.texto}</h6>

        {
          item.respuesta !== "respuesta verbal"? (
            <p className='respuesta'>Respuesta: {item.respuesta}</p>
          ): null
        }
        <p className='duracion'>Duración de la tarea: {item.tiempo}</p>
        <hr/>
    </div>
  )
}

export default Tarea