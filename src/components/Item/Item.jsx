import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import { useCartContext } from "../../context/cartContext"



const Item= ({producto})=> {
    
    const { agregarAlCart } = useCartContext()
    const onAdd = (cantidad) =>{
        agregarAlCart( {...producto, quantity: cantidad })
        
    }
   
    return (
        <div  className="card w-25"><div className="card">
                                 <Link to={`/detail/${producto.id}`}><img src={producto.imagen} className="card-img-top img-fluid w-100" alt="imagen" /></Link>
                                 <div className="card-body">
                                  <h4 className="card-title">{producto.titulo}</h4>
                                  <p>Desarrollador: {producto.desarrollador}</p>
                                 <p>Editor: {producto.editor}</p>
                                 <p>Plataforma: {producto.plataforma}</p>
                                 <p className="">Precio: {producto.precio}</p>
                                  <div className="card-footer"> <Link to={`/detail/${producto.id}`}><button className="btn btn-outline-dark">Detalle</button></Link> <ItemCount initial={1} stock={10} onAdd={onAdd}/> </div>
                                 </div>
                                </div> </div>
    )
}

export default Item