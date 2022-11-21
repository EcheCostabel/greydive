import React from 'react'

const Tarea = ({item, index}) => {
  return (
    <div>
        <h3>Tarea {index+1}</h3>
        <h3>{item.texto}</h3>
        <h4>Duración de la tarea: {item.tiempo}</h4>
        <hr/>
    </div>
  )
}

export default Tarea