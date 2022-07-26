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
export const CartContext = createContext([
  {
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemCart: ()=>{},
    cartCount: 0
  }
]);


export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setcartCount] = useState(0);


  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setcartCount(newCartCount);
}, [cartItems])



  const addItemCart = (productToAdd) => {
  setCartItems(addCartItem(cartItems, productToAdd))
}

  const value = {isCartOpen, setIsCartOpen, addItemCart, cartItems, cartCount}
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}