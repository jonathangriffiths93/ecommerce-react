import { useHref, useParams } from "react-router-dom"
import { mockFetch } from "../../utils/mockFetch/mockFetch"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const Contenedor = () => {
    const [productos, setProductos] = useState([])
    const {cid} = useParams()
    useEffect(()=>{
        if (cid) {mockFetch ()
            .then(resp => setProductos(resp.filter(prod=>prod.plataforma === cid)))
            .catch(err => console.log(err))
            .finally(()=> console.log('siempre al ultimo'))
        }else {mockFetch ()
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(()=> console.log('siempre al ultimo'))}
       
        
    }, [cid])

    return (
<> 
        
            { productos.lenght !== 0 ? 
            
                <ItemList productos={productos}/> 

: 

<h2>Cargando...</h2> }
           
            
              
</> )
}

export default Contenedor