import React, {Fragment} from 'react';

function Hola(){
    let saludo = 'variable saludo'
    return(
        <Fragment>
            <h2>1er componente hola {saludo}</h2>
            <p>Parrafo de prueba</p>
        </Fragment>
    )
}

export default Hola