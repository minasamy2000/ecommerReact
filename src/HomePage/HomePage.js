import React, { Component,useState } from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Browse from "./Browse";
import { CartProvider,useCart } from "react-use-cart";

function HomePage() {
   
    
      
        return(
            <CartProvider>
              
                <Nav/>
               <Banner/>
                <Browse/>
            
            </CartProvider>
        )
    }

export default HomePage