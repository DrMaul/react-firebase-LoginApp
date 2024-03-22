import React from 'react'
import Listadonombres from './components/Listadonombres';
import Propiedadescomp from './components/Propiedadescomp';

function App () {

    return(
        <div className='container'>
        <Listadonombres/>
        <h1>Popiedad de componentes</h1>
        <Propiedadescomp nombre='prueba1'/>
        <Propiedadescomp nombre='prueba2'/>
        </div>
        
    );


}

export default App
