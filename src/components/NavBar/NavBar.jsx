import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import { useCartContext } from "../../context/cartContext"

const NavBar = () => { 
  const {cantidadTotal} = useCartContext()
  return ( 
<nav className="navbar sticky-top navbar-dark navbarBackground">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand">
      <img
        src="https://companieslogo.com/img/orig/GME-2525e3b4.png?t=1650005798"
        className="me-2"
        height="20"
        alt="GS Logo"
        loading="lazy"
      />
      <small>GStore</small>
    </Link>
    <div >
    <NavLink to='/categoria/Steam' className={({isActive})=> isActive ? "btn btn-outline-light" : "navbar-brand"}>Steam</NavLink>
    <NavLink to='/categoria/Epic' className={({isActive})=> isActive ? "btn btn-outline-light" : "navbar-brand"}>Epic</NavLink>
    <NavLink to='/categoria/Uplay' className={({isActive})=> isActive ? "btn btn-outline-light" : "navbar-brand"}>Uplay</NavLink>
    <NavLink to='/categoria/PS4' className={({isActive})=> isActive ? "btn btn-outline-light" : "navbar-brand"}>PS4</NavLink>
    <NavLink to='/categoria/PS5' className={({isActive})=> isActive ? "btn btn-outline-light" : "navbar-brand"}>PS5</NavLink>
    <NavLink to='/categoria/XONE' className={({isActive})=> isActive ? "btn btn-outline-light" : "navbar-brand"}>Xbox One</NavLink>
    <NavLink to='/categoria/Switch' className={({isActive})=> isActive ? "btn btn-outline-light" : "navbar-brand"}>Switch</NavLink>
    
  </div>
    <Link to='/cart'>
    <CartWidget />
    </Link>
  </div>

</nav>
)}

export default NavBar