import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Titulo from './components/Titulo/Titulo'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <><NavBar />
    <Titulo />
    <ItemListContainer />
    </>
    
  )
}

export default App
