import { useState } from "react"
import { useCartContext } from "../../context/cartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({product}) => {

    const [tieneCantidad, actualizarTieneCantidad] = useState(false)
    const { agregarAlCart } = useCartContext()

    const onAdd = (cantidad) =>{
        console.log(cantidad)
        agregarAlCart( {...product, quantity: cantidad })
        actualizarTieneCantidad(true)
    }
   
    return (
        <div className="row "><div className="col-6">
            <img src={product.imagen} alt="" className="w-25"/>
            <h2>Titulo: {product.titulo}</h2>
            <h2>Plataforma: {product.plataforma}</h2>
            <h2>Desarrollador: {product.desarrollador}</h2>
            <h2>Editor: {product.editor}</h2>
            <h2>Precio: {product.precio}</h2>
            </div>
            <div className="col-6"> 
            {tieneCantidad ? <>
                <Link className="btn btn-warning" to='/cart'>Terminar Compra</Link>
                <Link className="btn btn-primary" to='/'>Seguir comprando</Link>
            </>
            :
             <ItemCount initial={1} stock={10} onAdd={onAdd}/>}
             </div>
            </div>
    )
}
export default ItemDetail