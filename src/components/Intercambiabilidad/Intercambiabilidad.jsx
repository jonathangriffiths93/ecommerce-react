import { useState } from "react";
import { Link } from "react-router-dom";

const InputCount= ()=> {
    return (
        <>
            <Link to='/cart'>
            <button className="btn btn-outline-primary"
            onClick={()=>console.log('ir al cart')}>Finalizar compra e ir al Carrito</button>
            </Link>
            <Link to='/'>
            <button className="btn btn-outline-primary"
            onClick={()=>console.log('ir al home')}>Seguir Comprando</button>
            </Link>
            
        </>
    )
}

const ButtonCount= ({handleInter})=> {
    return <>
      <div>
        <button className="btn btn-outline-dark">+</button>
        <label>1</label>
        <button className="btn btn-outline-dark">-</button>
        </div>
       
     <button className="btn btn-warning" onClick={handleInter} >
        Agregar al carrito </button>
    
    </>
}

const Intercambiabilidad = () => {
    const [inputType, setInputType] = useState('button')

    const handleInter=()=>{
    setInputType('input')
}
    return (
        <div>
        {
            inputType == 'button' ? 
            <ButtonCount handleInter={handleInter}/> 
            : 
            <InputCount />
        }
        </div>
    )
}


export default Intercambiabilidad