import { useParams } from 'react-router-dom';
import { useContext, useState,useEffect} from 'react';
import './category.styles.scss';
import ProductCard from '../../component/product-card/product-card.component';

import { CategoriesContext } from '../../context/CategoriesContext.component';
const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [ products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
   setProducts(categoriesMap[category])
  }, [category, categoriesMap]);
  
  return (
    <>
         <h2 className='title-category'>{ category}</h2>
    <div className='category-container'>
   
      {
       products && products.map((product) => {
          return (
            <ProductCard key={product.id} product={ product} />
  )
})
      }
      </div>
      </>
  )
}
export default Category