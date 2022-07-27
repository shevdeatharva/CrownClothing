import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import {
  CartContext
} from '../../context/cartdropContext'
import { useNavigate } from 'react-router-dom'
  

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext)
  
  const navigation = useNavigate();

  const NavigationHandler = () => {
    navigation('/checkout');
  }
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
      <h4>  {
        cartItems.map(item=><CartItem key={item.id} cartItem={item}/>)
        }</h4> 
      </div>
        <Button onClick={NavigationHandler}> GO checkout</Button>
     
    </div>
  )
}
export default CartDropDown