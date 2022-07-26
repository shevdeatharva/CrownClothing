import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import {
  CartContext
} from '../../context/cartdropContext'
  

const CartDropDown = () => {
  const {cartItems}= useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
      <h4>  {
        cartItems.map(item=><CartItem key={item.id} cartItem={item}/>)
        }</h4> 
      </div>
        <Button> GO checkout</Button>
     
    </div>
  )
}
export default CartDropDown