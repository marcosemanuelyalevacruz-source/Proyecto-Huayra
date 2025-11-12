import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Forms/Navbar'
import Home from './Pages/Home'
import IniciarSesión from './Pages/InicioDeSesión'
import Registrarse from './Pages/Registrarse'
import Galeria from './Pages/Galaria'
import './Pages/Estilos/StyleLoginyRegistro.css'
import CrearFormulario from './Formularios/CrearFormulario'
import Formulario from './Formularios/Formulario'
import Editar from './Formularios/Editar'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/IniciarSesión' element={<IniciarSesión/>}/>
        <Route path='/Registrarse' element={<Registrarse/>}/>
        <Route path='/Galeria' element={<Galeria/>}/>
        <Route path='/Formulario/:id' element={<Formulario/>}/>
        <Route path='/CrearFormulario' element={<CrearFormulario/>}/>
        <Route path='/Editar/:id' element={<Editar/>}/>
      </Routes>
    </>
  )
}

export default App
