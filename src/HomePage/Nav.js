/* eslint-disable jsx-a11y/anchor-is-valid */
import{ React, useState } from "react";
import { Link } from "react-router-dom";
import { useCart,CartProvider } from "react-use-cart";
import Products from "../Products/Products";






function Nav (){
  const {totalItems} =useCart();
  const [search,setSearch]=useState()
  
  
   
        return(
        
            <CartProvider>
                            
       <nav className="navbar navbar-expand-lg bg-light ">
        
  <div className="container-fluid " >

        <Link to="/">
        <img src="/img/Shopify-Logo.png" alt="" width={"100px"} height={"50px"}/></Link>
          
     
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{display:"flex"}}>
     
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/CreateAccount" id="signin1">Sign up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Account" id="login1" >Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Account" id="Login" style={{display:"none"}}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Account" id="Sign"style={{display:"none"}}>Login</Link>
        </li>
        <li className="nav-item">
        <div className="div" class=" position-relative">
  <Link to="/card"><img src="/img/4221923.png" width={"30px"} height={"30px"} alt=""/></Link>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
  {totalItems}
    <span class="visually-hidden">unread messages</span>
  </span>
</div>

        </li>
    
      </ul>
      <form className="d-flex" role="search">
      
       <button className="btn btn-dark" id="btn" style={{display:"none"}}>Logout</button>
      </form>
    </div>
  </div>
</nav> 

            </CartProvider>
        )
    
  }
export default Nav
