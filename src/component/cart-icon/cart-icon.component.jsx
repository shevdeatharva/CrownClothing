import { ShoppingIcon, CartIconContainer, ItemCount } from '../cart-icon/cart-icon.styles';
import { useContext } from 'react';
import { CartContext } from '../../context/cartdropContext';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)
const {cartCount}= useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen) 
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon'/>
      <ItemCount >{ cartCount}</ItemCount>
   </CartIconContainer>
 ) 
}
export default CartIcon