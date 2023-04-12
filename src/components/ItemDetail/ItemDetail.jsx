import { mockFetch } from "../../utils/mockFetch/mockFetch"
import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = ({product}) => {
// console.log(product)

    const onAdd = (cantidad) =>{
        console.log(cantidad)
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
            <div className="col-6"> <ItemCount initial={1} max={10} onAdd={onAdd}/> </div>
            </div>
    )
}
export default ItemDetail