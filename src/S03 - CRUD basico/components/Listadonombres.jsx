import React, {useState} from 'react'
import uniqid from 'uniqid'

const Listadonombres = () => {

    const [nombre, setNombre] = useState('')
    const [listanombres, setListaNombres] =useState([])
    const [modoedicion, setModoEdicion] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    const addNombre= (e)=>{
        e.preventDefault()
        if(!nombre.trim()){
            setError('El campo nombre esta vacio')
            return
        }
        const nuevoNombre = {
            id:uniqid(),
            tituloNombre:nombre
        }
        setListaNombres([...listanombres, nuevoNombre])
        setNombre('')
        setError(null)
    }

    const deleteNombre = (id) =>{
        const nuevaArray = listanombres.filter(item => item.id !== id)
        setListaNombres(nuevaArray)
    }

    const editar = (item)=> {
        setModoEdicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    }

    const editarNombre = (e) =>{
        e.preventDefault()
        if(!nombre.trim()){
            setError('El campo nombre esta vacio')
            return
        }
        const nuevoArray = listanombres.map(item => item.id === id ? {id:id, tituloNombre:nombre} : item)
        setListaNombres(nuevoArray)
        setModoEdicion(false)
        setNombre('')
        setError(null)
    }

    return (
        <div>
            <h2>Aplicacion CRUD basica</h2>
            <div className='row'>
                <div className='col'>
                    <h2>Listado de nombres</h2>
                    <ul className='list-group'>
                        {
                            listanombres.map(item => 
                                <li key='{item.id}' className='list-group-item'>
                                    {item.tituloNombre}
                                    <button
                                        className='btn btn-danger float-end'
                                        onClick= { ()=> {deleteNombre(item.id)}}
                                    >
                                        BORRAR
                                    </button>
                                    <button
                                        className='btn btn-info float-right'
                                        onClick= { ()=> {editar(item)}}
                                    >
                                        EDITAR
                                    </button>
                                </li>
                            )
                        }
                        
                    </ul>
                </div>

                <div className='col'>
                    <h2>Formulario para añadir nombres</h2>
                    <form onSubmit={modoedicion ? editarNombre : addNombre} className='form-group'>
                        <input 
                            onChange={(e)=> {setNombre(e.target.value)}} 
                            className='form-control mb-3' 
                            type='text' 
                            placeholder='Nombre..'
                            value={nombre}
                        />
                        <input 
                            className='btn btn-info btn-block' 
                            type='submit' 
                            value={modoedicion ? 'EDITAR NOMBRE' : 'REGISTRAR NOMBRE'}
                        />
                    </form>
                    {
                        error != null ? (
                            <div className='alert alert-danger'>
                                {error}
                            </div>
                        ):
                        (
                            <div></div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}
export default Listadonombres