import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio'
import Admin from './components/Admin'
import Login from './components/Login'
import Menu from './components/Menu'

const App = () => {
  return (
    <div className='container'>
        <Router>
            <Menu/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
        
    </div>
  )
}

export default App