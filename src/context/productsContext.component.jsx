import React from "react";
import { createContext, useEffect, useState } from "react";
import PRODUCT from '../shopdata.json'
export const productContext = createContext({
  products: []
})

export const ProductsProvider = ({ children }) => {
  const [products, setproducts] = useState(PRODUCT);
  const value={products}
  return (
    <productContext.Provider value={value}>
{children}
    </productContext.Provider>
  )
}



