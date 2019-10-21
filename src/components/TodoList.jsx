import React from 'react'
import Buttons from './Buttons'

function TodoList(props) {

  const todasLasTareas = props.tareas.map((tarea, index) => <div className="box" key={index}>
    <div className="header">
      <h4>{tarea.titulo}</h4>
    </div>
    <h5>{tarea.descripcion}</h5>
    <Buttons />
  </div>)
  return (
    <>
      <div className="card-box">{todasLasTareas}</div>
    </>
  )
}

export default TodoList
