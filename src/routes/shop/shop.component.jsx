import { Route, Routes } from 'react-router-dom';
import './shop.styles.scss'
import CategoryPreRoute from '../category-preview-route/category-preroute';
import Category from '../category/category';
const Shop = () => {


  return (
    <Routes>
      <Route index element={<CategoryPreRoute />} />
      <Route path=':category' element={<Category/>}/>
   </Routes>
  )
}
export default Shop; 