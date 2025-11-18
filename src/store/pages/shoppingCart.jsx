import React, { useContext } from 'react'
import {CartContext} from './product'


function shoppingCart() {
  const {addTocart, removeFromCart, clearCart, cartItems} = useContext(CartContext);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
    };
  return (
    
    <div>
      
       <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${calculateTotalPrice()}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

export default shoppingCart;
