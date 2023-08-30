/* eslint-disable no-undef */
import React from "react";
import Nav from "../HomePage/Nav";
import { CartProvider } from "react-use-cart";
import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";


function Account(){

    return(
    <CartProvider>
      <Nav/>
      
    <div className="cont-image">
   
      <div className="cont text-center" style={{padding: "30px 20%"}}>
      <h1 id="text" ></h1>
      <h1>Welcome To Shopify</h1>
      <p>Please Fill This Form To Login</p>
      <div className="Sign" style={{padding: "0px 20%"}}>
      
        <label style={{padding: "10px 0px"}}>Email</label>
        <input  className="form-control btn-outline-dark" type="email" id="Email" />
        <label style={{padding: "10px 0px"}}>Password</label>
        <input
          className="form-control btn-outline-dark" 
          type="password"
          id="password"
        />
        <button
          type="submit"
          className="btn btn-outline-dark"
          value="Submit"
          id="submit"
          style={{margin:" 30px 0px;"}}

         onClick={logiin}
         
        
        >
          Submit</button>
        <br />
        <Link  to="/CreateAccount">Create an Account</Link>
        
      </div>
      </div>
      </div>
      </CartProvider>
    
 
      
    )
}
export default Account;