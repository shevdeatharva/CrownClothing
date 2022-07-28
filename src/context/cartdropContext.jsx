import { createContext, useState, useEffect } from "react";
import CartItem from "../component/cart-item/cart-item.component";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItem contain product to add
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id );

  if (existingCartItem) {
    return (
      cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
  }
  return [...cartItems, {...productToAdd, quantity: 1}]
}


const removeCartItem = (cartItems, productToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id );
  // check if quantity to 1, if it is remove that item from cart
  if (existingCartItem.quantity === 1) {
  return cartItems.filter(cartItem=> cartItem.id === productToRemove.id)
}


  //if it is not than decrement the quantity of item by 1

  return (
    cartItems.map((cartItem) => cartItem.id === productToRemove.id ?
      { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem))
}



const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem=> cartItem.id !== cartItemToClear.id)
}





export const CartContext = createContext([
  {
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemCart: () => { },
    clearItems: ()=>{},
    cartCount: 0,
    removeItemCart: () => { },
    total: 0
  }
]);


export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setcartCount] = useState(0);

  const [cartTotal, setcartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity , 0)
    setcartCount(newCartCount);
}, [cartItems])


useEffect(() => {
  const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
  setcartTotal(newCartTotal);
}, [cartItems])


  const addItemCart = (productToAdd) => {
  setCartItems(addCartItem(cartItems, productToAdd))
}

  
const removeItemCart = (productToRemove) => {
  setCartItems(removeCartItem(cartItems, productToRemove))
  }
  
  const clearItemCart = ( cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear))
  }
  
  const value = {isCartOpen, setIsCartOpen, addItemCart, removeItemCart, clearItemCart ,cartItems, cartCount, cartTotal}
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}