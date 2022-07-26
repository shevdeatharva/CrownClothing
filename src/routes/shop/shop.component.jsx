import { useContext } from "react";
import { productContext } from "../../context/productsContext.component";
import ProductCard from "../../component/product-card/product-card.component";
import './shop.stylees.scss'

const Shop = () =>
{
  const {products}= useContext(productContext)
  return (
    
    <div className="product-container">
      {products.map((product) => {
        return(
        <div>
          <ProductCard key={product.id} product={ product} />
          </div>
        )
      })}
  
          </div>
  )
}
export default Shop; 