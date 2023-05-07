# Sintaxis del proyecto de e-commerce - Jonathan Griffiths

Este documento proporciona una guía rápida de la sintaxis utilizada en el proyecto de e-commerce "Gaming Store" desarrollado con React.
Gaming Store es una simulación de tienda de juegos digitales para varias plataformas. La venta es de facil acceso y solo pide seguir unos cuantos pasos para completarlas. Las ordenes se enviaran con Firebase a una base de datos. Así como los productos se alojan alli mismo. Los productos se dividen en categorías llamadas "plataformas" que indican para que dispositivo o consola pertenecen los juegos buscados.

## Estructura del proyecto

El proyecto sigue la estructura de directorios explicada durante el curso de React de Coderhouse por el profesor Federico Osandón:

ecommerce-jgriffiths/
|- public/
|- src/
    |- assets/
    |- components/
        |- cartContainer/
        |- cartWidget/
        |- Filter/
        |- Intercambiabilidad/
        |- Item/
        |- ItemCount/
        |- ItemDetail/
        |- ItemDetailContainer/
        |- ItemList/
        |- ItemListContainer/
        |- Loading/
        |- NavBar/
        |- Titulo/
    |- context/
        |- cartContext/
    |- firebase/
    |- hooks/
    |- utils/
    |- App.jsx
    |- main.jsx
    |- package.json
    |- package-lock.json


- **public/**: Este directorio contiene el archivo de vite.svg.
- **src/**: Aquí se todo el codigo de la aplicación.
  - **components/**: Contiene los componentes reutilizables de React.
  - **context/**: Contiene el contexto y las funciones del cart.
  - **App.js**: El componente raíz de la aplicación.
  - **main.js**: El punto de entrada de la aplicación.

## Librerías

Este proyecto utiliza algunas librerías básicas para su funcionamiento. Las cuales dejo listadas a continuación:

- ReactDom
- Bootstrap
- React Bootstrap
- Firebase/Firestore (como base de datos)


## Componentes

### Navbar

El componente `Navbar` se encuentra en el archivo `Navbar.jsx` dentro del directorio `components`. Es responsable de mostrar la barra de navegación en la parte superior de la página. Aquí está su estructura básica:

import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import { useCartContext } from "../../context/cartContext"

const NavBar = () => { 
  const {cantidadTotal} = useCartContext()
  return ( 
<nav className="navbar sticky-top navbar-dark navbarBackground">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand">
      <img
        "Imagen del logo"
      />
      <small>GStore</small>
    </Link>
    <div >
    <NavLink to='/categoria/Steam' className={({isActive})=> isActive ? "btn btn-outline-light" : "navbar-brand"}>Componente de la Navbar</NavLink>
   
  </div>
    <Link to='/cart'>
    <CartWidget />
    </Link>
  </div>

</nav>
)}

export default NavBar

## item
El componente item se encuentra en el archivo item.jsx dentro del directorio components. Se utiliza para representar un producto en la página principal de la tienda. Aquí está su estructura básica:

import React from 'react';

const Item= ({producto})=> {
    
    const { agregarAlCart } = useCartContext()
    const onAdd = (cantidad) =>{
        agregarAlCart( {...producto, quantity: cantidad })
        
    }
   
    return (
        <div  className="card w-25"><div className="card"> "Contenido de la card"
                                </div> </div>
    )
}

export default Item

### cartContainer
CartContainer.jsx es un componente que se encuentra dentro del directorio src, y es el encargado de contener todos los elementos que formaran el carrito de compras desde dentro. Asi como se encarga de hacer llamada a las funciones que se manejan dentro del mismo. Este se conecta con la base de datos de Firebase para completar las ordenes de compra y enviarlas junto con un formulario completado por el usuario. Aqui su estructura básica:

import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../context/cartContext';

const CartContainer = () => {
  const [id, setId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    confirmEmail: ''
  });
  const { cartList, vaciarCarrito, precioTotal, eliminarProducto, eliminarProductoIndividual, agregarProductoIndividual } = useCartContext();
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [order, setOrder] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newOrder = {
      buyer: formData,
      items: cartList.map(({ id, titulo, precio, quantity }) => ({ id, titulo, precio, quantity })),
      total: precioTotal()
    };

    const db = getFirestore();
    const queryCollection = collection(db, 'orders');

    addDoc(queryCollection, newOrder)
      .then((resp) => {
        setId(resp.id);
        setOrder(newOrder);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setOrderCompleted(true);
        vaciarCarrito();
      });
  };

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleGoToCheckout = () => {
    setShowForm(true);
  };

  return (
    <>
      {id ? (
        <>
          <h2 className="text-center">¡Gracias por su compra!</h2>
          <h4 className="text-center">El id de su orden es: "{id}"</h4>

          {order && (
            <div className='card text-center'>
              <h3>Detalles del pedido:</h3>
              "detalles"</div>
          )}
        </>
      ) : (
        <div>
          {cartList.map((product) => (
            <li className="p-3 mb-2 bg-secondary text-light" key={product.id}>
              
              "mapeo del producto a comprar y botones para agregar o quitar productos del carro"

            </li>
          ))}
          <h3>Precio Total: {precioTotal()}</h3>

          <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>

          {!showForm && (
            <button className="btn btn-success" onClick={handleGoToCheckout}>Ir a finalizar compra</button>
          )}

          {showForm && (
            <form onSubmit={handleSubmit} className="text-center">
              <h4>Ingrese sus datos para finalizar la compra:</h4>
              <input
                "input para el usuario"
              />
              
              <button className="btn btn-success">Terminar Compra</button>
            </form>
          )}
          <br />
        </div>
      )}
    </>
  );
};

export default CartContainer;

## Páginas
### Main
La página principal de la tienda se encuentra en el archivo main.jsx dentro del directorio src. Su funcionalidad está en contener a App, sus importaciones e iniciar firebase/firestore:

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initFirebase } from './firebase/config'

initFirebase()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



## Conclusiones
Este es solo un ejemplo básico de la sintaxis utilizada en el proyecto de e-commerce de Gaming Store, no se muestran todos los componentes utilizados. Espero sirva como un breve vistazo a la aplicación.