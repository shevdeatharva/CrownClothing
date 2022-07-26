import { ReactComponent as  ShoppingIcon } from '../../assests/shopping-bag.svg';
import './cart-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cartdropContext';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)
const {cartCount}= useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen) 
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count' >{ cartCount}</span>
   </div>
 ) 
}
export default CartIcon