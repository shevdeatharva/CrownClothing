import React from "react";
import Home from "./routes/home/home.component";
import { Routes, Route} from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/Checkout.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="Auth" element={<Authentication />} />
       <Route path="checkout" element={<CheckOut/>}/>
      </Route>
     
      </Routes>
  )
}
export default App;