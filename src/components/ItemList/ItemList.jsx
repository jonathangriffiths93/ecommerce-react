import { mockFetch } from "../../utils/mockFetch/mockFetch"
import Item from "../Item/Item"


const ItemList = ({productos}) => {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '20px',
        }}>
        {productos.map(producto => <Item key={producto.id} producto={producto}/>)}
        </div>
    )
}

export default ItemList