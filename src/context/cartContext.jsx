import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

export const CartContextProvider = ({children}) => { 
   
    const [cartList, setCartList] = useState([])

    const agregarAlCart = (newProduct) =>{

        const indexProduct = cartList.findIndex(product => product.id === newProduct.id)  
        
        if (indexProduct === -1 ) {
            setCartList([
                ...cartList,
                newProduct
            ])              
        } else {
            cartList[indexProduct].quantity += newProduct.quantity
            setCartList( [ ...cartList ] )
        }

    }
    

    
    const cantidadTotal = () => cartList.reduce( (cantidadTotal, objProducto) => cantidadTotal += objProducto.quantity ,0 ) 

    const precioTotal = () => {
        return cartList.reduce((totalPrice, objProducto) => totalPrice += (objProducto.precio * objProducto.quantity), 0)
    }
   
    const eliminarProductoIndividual = (pid) =>{

        const indexProduct = cartList.findIndex(product => product.id === pid)

        if (cartList[indexProduct].quantity > 1) {
            cartList[indexProduct].quantity = cartList[indexProduct].quantity -  1            
            setCartList( [...cartList] )
        } else {
            setCartList(cartList.filter(product => product.id !== pid ))          
        }
    }

    const agregarProductoIndividual = (productId) => {
        const product = cartList.find((product) => product.id === productId);
    
        if (product) {
          product.quantity += 1;
          setCartList([...cartList]);
        } else {
          // Aquí deberías obtener el producto de tu fuente de datos (API, base de datos, etc.)
          const newProduct = {
            id: productId,
            name: "Producto nuevo",
            quantity: 1,
            precio: 10,
          };
    
          setCartList([...cartList, newProduct]);
        }}

    const eliminarProducto = (pid) => {
        setCartList(cartList.filter((product) => product.id !== pid));
      };

    const vaciarCarrito = () => {
        setCartList([])
    }

    return( 
        <CartContext.Provider value={{
            cartList,
            agregarAlCart,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProductoIndividual,
            agregarProductoIndividual,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>       
    )                                                                                  
}
