import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {mockFetch } from "../../utils/mockFetch/mockFetch"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {pid} = useParams()
    

    useEffect(()=>{
        mockFetch(pid)
        .then(resp => setProduct(resp))
        .catch((err)=> console.log(err))
    }, [])
    return (
        <ItemDetail product={product}/>
    )
}
export default ItemDetailContainer