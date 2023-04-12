import { useEffect, useState } from "react"
import Contenedor from "../Contenedor/Contenedor"
import { useParams } from "react-router-dom"

function ItemListContainer(props) {
   const{cid}= useParams()
    return (<>
    <Contenedor/>
        </>
    )
}
    export default ItemListContainer