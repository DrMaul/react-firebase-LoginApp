import React from 'react';
import './css/App.css';
import Hola from './components/Hola'
import Contador from './components/Contador'
import Listado from './components/Listado'
import Temperatura from './components/Temperatura'
import Formulario from './components/Formulario'


function App() {
  return (
    <div className="App mt-5">
      <h1>Titulo de nuestro 1er proyecto</h1>
      <Hola></Hola>
      <Contador></Contador>
      <Listado></Listado>
      <Temperatura></Temperatura>
      <Formulario/>
    </div>
  );
}

export default App;
