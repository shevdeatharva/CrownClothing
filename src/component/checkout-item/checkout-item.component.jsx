import './checkout-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cartdropContext'

const CheckoutItem = ({cartItem}) =>{
  const { name, price, imageUrl, quantity} = cartItem
  
  const { clearItemCart ,  addItemCart, removeItemCart  } = useContext(CartContext)
  
  const clearItemCartHandler = () => clearItemCart(cartItem)
  const addItemHandler = () => addItemCart(cartItem);

const removeItemHandler=()=> removeItemCart(cartItem)


  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
<img src={imageUrl} alt={`${name}`}/>
      </div>
      <span className='name'>{ name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
        <span className='value'>{quantity} </span>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
      
      </span>
      <span className='price'>{price }</span>
      <div className='remove-button' onClick={clearItemCartHandler}> &#10005; </div>
  </div>
)

}
export default CheckoutItem