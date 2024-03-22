import React from 'react'
import Bienvenida from './components/bienvenida'
import Cards from './components/Cards'

const App = () => {
  return (
    <div>
        <h1>Propiedades de los componentes</h1>
        <Bienvenida nombre="Usuario"/>
        
        <div className="row">
            <div className="col">
                <Cards 
                imagen="https://picsum.photos/150/150"
                titulo="Titulo card 1"
                texto="Texto de la card 1"
                />
            </div>
            <div className="col">
                <Cards 
                imagen="https://picsum.photos/150/150"
                titulo="Titulo card 2"
                texto="Texto de la card 2"
                />
            </div>
            <div className="col">
                <Cards 
                imagen="https://picsum.photos/150/150"
                titulo="Titulo card 3"
                texto="Texto de la card 3"
                />
            </div>
        </div>

    </div>
  )
}

export default App