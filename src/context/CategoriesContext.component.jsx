import React from "react";
import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";


export const CategoriesContext = createContext({
  categoriesMap: {}
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});
 
  useEffect(() => {
    const getCategories = async () => {
      
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setcategoriesMap(categoryMap)
    }
    getCategories()
},[])
  const value={categoriesMap}
  return (
    <CategoriesContext.Provider value={value}>
{children}
    </CategoriesContext.Provider>
  )
}



