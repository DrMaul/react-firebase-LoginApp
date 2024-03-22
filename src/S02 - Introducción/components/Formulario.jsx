import React, {useState} from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    /*Operador de propagacion: concatenar arrays
    const array1 = [1,2,3]
    const array2 = [4,5,6] 
    const array3 = [...array1,...array2]   
    */

    const Validar = (event)=>{
        event.preventDefault()
        console.log('boton pulsado')
        if(!nombre.trim()){
            console.log('el nombre esta vacio')
            return
        }
        if(!edad.trim()){
            console.log('la edad esta vacia')
            return
        }
    }
    return (
        <div className='container'>
            <form onSubmit={Validar} className='form-group'>
                <input
                    placeholder='introducir nombre' 
                    className='form-control mb-3' 
                    type='text'
                    onChange = { (e)=> {setNombre(e.target.value)}}
                />
                <input 
                    placeholder='introducir apellido'
                    className='form-control mb-3' 
                    type='text'
                    onChange = { (e)=> {setEdad(e.target.value)}}
                />
                <input 
                    className='btn btn-info btn-block mb-3' 
                    type='submit'
                />
            </form>
        </div>
    )
}
export default Formulario