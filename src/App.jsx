import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Titulo from './components/Titulo/Titulo'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartContextProvider } from './context/cartContext'
import CartContainer from './components/cartContainer/cartContainer'
import './App.css'



function App() {
  



  return (
   <CartContextProvider>
    <BrowserRouter>

      <NavBar />
      <Titulo />
        <Routes>
          <Route path='/categoria/:cid' element={ <ItemListContainer greeting="profe"/>} />
          <Route path='/' element={ <ItemListContainer />}/>
          <Route path='/detail/:pid' element={ <ItemDetailContainer/>} />
          <Route path='/cart' element={ <CartContainer/>} />
          <Route path='*' element={ <Navigate to='/' />}/>
          
         </Routes>
         
    </BrowserRouter>
   </CartContextProvider>
  )
}

export default App
