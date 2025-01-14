import React, {useState} from 'react'

 const Temperatura = () => {

    const [temperatura,SetTemperatura] = useState(19)
    const Subir = ()=>{
        SetTemperatura(temperatura +1)
    }
    const Bajar = ()=>{
        SetTemperatura(temperatura -1)
    }

    return (
        <div className='container'>
            <h2>La temperatura es: {temperatura}</h2>
            <p>
                { temperatura > 21 ? 'Hace calor' : 'Hace frio'
                }
            </p>
            <button className='btn btn-success btn-block' onClick={Subir}>Aumentar temperatura</button>
            <button className='btn btn-success btn-block' onClick={Bajar}>Reducir temperatura</button>
        </div>
    )
}

export default Temperatura;
