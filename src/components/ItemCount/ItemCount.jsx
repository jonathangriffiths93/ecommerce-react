import { useEffect, useRef, useState } from "react"
import { useCount } from "../../hooks/useCount/useCount"


export const ItemCount = ({initial=0, min=1, max=10, onAdd}) => {
    const {contador, sumar, restar, reset} = useCount(1, max, initial)
    
    function handleOnAdd(){
      onAdd(contador)
    }

    return (
      <div>
        <h2>Contador: {contador}</h2>
        <button className="btn btn-outline-dark" onClick={sumar}>+</button>
        <button className="btn btn-outline-dark" onClick={restar}>-</button>
        {/* <button onClick={reset}>Reset</button> */}
        <button className="btn btn-warning" onClick={handleOnAdd}>Agregar al carrito</button>
      </div>
    )
  }

  