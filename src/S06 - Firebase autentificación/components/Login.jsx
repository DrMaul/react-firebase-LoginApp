import React, {useState} from 'react'
import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '../firebaseconfig'
import {useNavigate} from 'react-router-dom'



const Login = () => {

  const historial = useNavigate()
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  
  const [msgError, setMsgError] = useState(null);

  const RegistrarUsuario = async (e) => {
    e.preventDefault()
    try{
      await createUserWithEmailAndPassword(auth, email, pass)
      .then ((r) => {
        historial('/')
      })
    }catch (error) {

      if (error.code === 'auth/invalid-email') {
        setMsgError('Formato de email incorrecto')
      }
      if (error.code === 'auth/weak-password') {
        setMsgError('La contraseña debe tener al menos 6 caracteres')
      }
      //console.error(error.code, error.message);
    }
  }

  const LoginUsuario = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, pass)
      .then ((r) => {
        historial('/')
      })
    }catch (error) {

      if (error.code === 'auth/invalid-email' || error.code === 'auth/invalid-email') {
        setMsgError('El email ingresado es incorrecto')
      }
      if (error.code === 'auth/invalid-login-credentials') {
        setMsgError('El email o la contraseña son incorrectos')
      }
      if (error.code === 'auth/missing-password') {
        setMsgError('Ingrese una contraseña valida')
      }

      console.log(error.code, error.message)
    }
    
    
  }
 
  return (
    <div className='row mt-5'>
      <div className="col"></div>
      <div className="col">
        <form onSubmit={RegistrarUsuario} className='form-group'>
          <input
            onChange={(e)=> {setEmail(e.target.value)}} 
            className='form-control mt-4' 
            placeholder="Introduce el email" 
            type="email" />
          <input 
            onChange={(e)=> {setPass(e.target.value)}} 
            className='form-control mt-4' 
            placeholder="Introduce la Password" 
            type="password" />
          <input 
            className='btn btn-dark w-100 mt-4' 
            value='Registrar usuario' 
            type="submit" />
        </form>
        <button onClick={LoginUsuario} className='btn btn-success w-100 mt-2'>Iniciar Sesión</button>
        { 
          msgError != null ? 
          (
            <div className="alert alert-danger mt-4" role="alert">
              {msgError}
            </div>
          )
          :
          (
            <span></span>
          )
        }
      </div>
      <div className="col"></div>
    </div>
  )
}

export default Login