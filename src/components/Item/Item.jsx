import { Link } from "react-router-dom"
import { mockFetch } from "../../utils/mockFetch/mockFetch"

const Item= ({producto})=> {
   
    return (
        <div  className="card w-25"><div className="card">
                                 <img src={producto.imagen} className="card-img-top img-fluid w-100" alt="imagen" />
                                 <div className="card-body">
                                  <h4 className="card-title">{producto.titulo}</h4>
                                  <p>Desarrollador: {producto.desarrollador}</p>
                                 <p>Editor: {producto.editor}</p>
                                 <p>Plataforma: {producto.plataforma}</p>
                                 <p className="">Precio: {producto.precio}</p>
                                  <div className="card-footer"> <Link to={`/detail/${producto.id}`}><button className="btn btn-outline-dark">Detalle</button></Link> <button id="agregarBtn{Juego.id}" className="btn btn-warning">Agregar al carrito</button></div>
                                 </div>
                                </div> </div>
    )
}

export default Item