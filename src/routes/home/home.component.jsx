import React from "react";
import CategoriesDirectory from '../../component/categories-dir/categories-dir.compo'
const Home = ({categories}) => {

  
  return (
    <div >
      <CategoriesDirectory categories={categories} />
    
      
    </div>
  );
}

export default Home;