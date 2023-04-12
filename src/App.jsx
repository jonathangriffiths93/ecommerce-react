import { useState } from 'react'
import { ItemCount } from './components/ItemCount/ItemCount'
import NavBar from './components/NavBar/NavBar'
import Titulo from './components/Titulo/Titulo'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'
import Contenedor from './components/Contenedor/Contenedor'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'




function App() {
  



  return (
    <BrowserRouter>
      <>
      <NavBar />
      <Titulo />
        <Routes>
          <Route path='/categoria/:cid' element={ <ItemListContainer greeting="profe"/>} />
          <Route path='/' element={ <Contenedor />}/>
          <Route path='/detail/:pid' element={ <ItemDetailContainer/>} />

          <Route path='*' element={ <Navigate to='/' />}/>
         </Routes>
         
        <ItemCount />
  
      </>
  
    </BrowserRouter>
  )
}

export default App
