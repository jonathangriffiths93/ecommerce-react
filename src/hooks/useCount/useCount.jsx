import { useEffect, useRef, useState } from "react"

export const useCount = (initial=0, max=10, min=1) => {
    if(initial<min || initial>max) initial = min
    const [contador, setContador] = useState(0)
    

    const sumar = () => {
        if (contador < max)
      setContador(contador + 1)}

    const restar = () => {
    if (contador > initial)
        setContador(contador - 1)
         }
    const reset = () => {
        setContador(initial)
    }

    return {contador, sumar, restar, reset}

}