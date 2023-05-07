import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Loading from "../Loading/Loading"





function ItemListContainer(props) {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
   const{cid}= useParams()

  


   useEffect(()=>{
    if (cid) {
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
    
        const queryFilter = query(queryCollection,
            where('plataforma', '==', cid))
    
        getDocs(queryFilter)
        .then(resp=> setProductos( resp.docs.map(producto=> ({ id: producto.id, ...producto.data() })) ))
        .catch(err=> console.log(err))
        .finally(()=>setIsLoading(false))
    }else {
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
    
        getDocs(queryCollection)
        .then(resp=> setProductos( resp.docs.map(producto=> ({ id: producto.id, ...producto.data() })) ))
        .catch(err=> console.log(err))
        .finally(()=>setIsLoading(false))
    }
}, [cid])

    return (<> 
        
        { isLoading ? 
        <Loading/>
            
        
        // <ItemList productos={productos}/> 

: 
            <ItemList productos={productos}/>
}
       
        
          
</> 
    )
}
    export default ItemListContainer
