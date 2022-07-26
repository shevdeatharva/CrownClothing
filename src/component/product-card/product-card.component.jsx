
import './product-card.styles.scss'
import Button from '../button/button.component'
import './product-card.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cartdropContext'


const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemCart } = useContext(CartContext)
  
  const addProductToCart=()=> addItemCart(product)
return(
  <div className='product-card-container'>
    <img src={ imageUrl}  alt="name"/>
    <div className='footer'>
      <span className='name'>{name}</span>
      <span className='price'>{ price}</span>
    </div>
    <Button buttonType="inverted" onClick={addProductToCart}> Add to cart</Button>
  </div> 
   
)  

}
export default ProductCard