import { CartProvider, useCart } from "react-use-cart";
import React from "react";
import Nav from "../HomePage/Nav";

function Cart() {
    const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,emptyCart, totalItems,cartTotal
    } = useCart();
  
    if (isEmpty) return <p>Your cart is empty</p>;
  
    return (

      <>
        <h1 className="text-center">Cart ({totalUniqueItems})</h1>
        <h>Total Items={totalItems}</h>
        <h>           Total Price={cartTotal}$</h>
        <button onClick={emptyCart} className="btn btn-danger ">Empty Cart</button>
  
        <ul>
          {items.map((p) => (
            <li key={p.id}>
              <div className="all d-flex" style={{justifyContent:"space-between" }}>
              <div className="txt">
              <img src={p.thumbnail} alt="" width={"100px"} height={"100px"}/>
              <h>Price={p.price}$</h>
            quantity=  {p.quantity}   {p.title} &mdash;
            </div>
            <div className="btns">
              <button  className="btn btn-success"
                onClick={() => updateItemQuantity(p.id, p.quantity - 1)}
              >
                -
              </button>
              <button className="btn btn-dark" style={{margin:"0px 30px"}}
                onClick={() => updateItemQuantity(p.id, p.quantity + 1)}
              >
                +
              </button>
              <button className="btn btn-danger" onClick={() => removeItem(p.id)}>&times;</button>
              </div>
              </div>
            </li>
          ))}
        </ul>
        
      </>
    );
  }

  function  CardPage() {
    return (
      <CartProvider>
        <Nav/>
       <Cart/>
        </CartProvider>
        
      
    );
  }
  export default CardPage