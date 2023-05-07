import { useEffect, useRef, useState } from "react"
import { useCount } from "../../hooks/useCount/useCount"


export const ItemCount = ({initial=1, stock=50, min=1, onAdd}) => {

  const { contador, increment, decrement, reset } = useCount( 1, 10, 1 )   
  
  function handleOnAdd() {
      onAdd(contador)
  }

    return (
      <div>
        <button className="btn btn-outline-dark" onClick={increment}> + </button>
        <label> {contador} </label>
        <button className="btn btn-outline-dark" onClick={decrement}> - </button>
        {/* <button onClick={reset}>Reset</button> */}
        <button className="btn btn-warning" onClick={handleOnAdd}>Agregar al carrito</button>
      </div>
    )
  }

  