import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import {CartContext} from '../../context/cartdropContext'
import { useNavigate } from 'react-router-dom'
  
import { CartDropDownContainer, EmptyMessage, CartItems } from './cart-dropdown.styls.jsx'


const CartDropDown = () => {
  const { cartItems } = useContext(CartContext)
  
  const navigation = useNavigate();

  const NavigationHandler = () => {
    navigation('/checkout');
  }
  return (
    <CartDropDownContainer>
      <CartItems>
        <h4>  {
          cartItems.length ?
            (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)) : (
              <EmptyMessage>Your cart is Empty</EmptyMessage>
        )
        }</h4> 
      </CartItems>
        <Button onClick={NavigationHandler}> GO checkout</Button>
     
    </CartDropDownContainer>
  )
}
export default CartDropDown