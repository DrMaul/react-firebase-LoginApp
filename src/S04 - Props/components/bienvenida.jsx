import React from 'react'

const bienvenida = (props) => {

//object destructuring
const {nombre} = props
  return (
    <div>
        <h2>Bienvenido {nombre}</h2>
    </div>
  )
}

export default bienvenida