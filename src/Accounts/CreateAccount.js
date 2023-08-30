/* eslint-disable no-undef */
import React  from "react";
import { CartProvider } from "react-use-cart";
import Nav from "../HomePage/Nav";


function CreateAccount(){
  
    return(
        <CartProvider>  
            <Nav/>
            <div className="Sign text-center " style={{padding: "30px 20%"}}>
            <h1 id="text" ></h1>
            <h1>Create Your Account</h1>
            <label>User Name</label>
            <input  className="form-control btn-outline-dark" type="text" id="username"/>
            <label>Email</label>
            <input  className="form-control btn-outline-dark " type="email" id="Email"/>
            <label>Password</label>
            <input  className="form-control btn-outline-dark " type="password" id="password"/>
            <label>Confirm Password</label>
            <input  className="form-control btn-outline-dark " type="password" id="confirmPass"/>
            <button type="submit" className="btn btn-outline-dark" value="Submit" id="submit" onClick={done}>Submit</button>
            {/* <Valdation/> */}
            </div> 
            </CartProvider>
    )
}
export default CreateAccount