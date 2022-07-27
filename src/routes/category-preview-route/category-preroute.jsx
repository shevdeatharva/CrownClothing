import { useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContext.component";
import CategoryPreview from "../../component/category-preview/category-preview.component";


const CategoryPreRoute = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      
       { Object.keys(categoriesMap).map((title) => {
         const products = categoriesMap[title]
         return(
           <CategoryPreview key={title} title={title} products={products} />
         )
            
      
        })}
   
    </>
  )
}
export default CategoryPreRoute; 