import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => { 
  return ( 
<nav class="navbar sticky-top navbar-dark navbarBackground">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img
        src="https://companieslogo.com/img/orig/GME-2525e3b4.png?t=1650005798"
        class="me-2"
        height="20"
        alt="GS Logo"
        loading="lazy"
      />
      <small>GStore</small>
    </a>
    <div >
    <a class="navbar-brand" href="#">Steam</a>
    <a class="navbar-brand" href="#">PlayStation</a>
    <a class="navbar-brand" href="#">Xbox</a>
  </div>
    <CartWidget />
  </div>

</nav>
)}

export default NavBar