import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import Loading from "../Loading/Loading"



const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {pid} = useParams()
    

    useEffect(()=>{
        const dbFirestore = getFirestore()
        const queryDocument = doc(dbFirestore, 'productos', pid)
        console.log(queryDocument)
        getDoc(queryDocument)
        .then(resp=> setProduct({id:resp.id, ... resp.data()}))
        .catch(err=>console.log(err))
        .finally(()=>setIsLoading(false))
    }, [])

    return (
        <>
        {
        isLoading 
        ?
        <Loading/> 
        :
        <ItemDetail product={product}/>
            
        }
        </>
        
    )
}
export default ItemDetailContainer