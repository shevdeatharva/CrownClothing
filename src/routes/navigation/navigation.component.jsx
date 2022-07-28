import {Fragment, useContext} from "react";
import { Outlet} from 'react-router-dom'

import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropDown from "../../component/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import { NavigationContainer, LogoContainer,NavLinks, NavLink } from "./navigation.styles";
import { UserContext } from "../../context/usercontext.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../context/cartdropContext";


const Navigation = () => {
  const { currentUser} = useContext(UserContext)
const {isCartOpen}= useContext(CartContext)
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
        <CrwnLogo/>
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              Sign Out </NavLink>
          ): (<NavLink to='/Auth'>
          SIGN IN
          </NavLink>
          )}
          <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropDown />}   {/* isCartOpen wrap around double ampersand which is known as short circuit operator which actually check the truthiness 
        value between both must be evaluate as truthy value for executing it. 
        
        cartDropDown are actally are truthy value bcoz it is component which is always
        true by default bcoz it contains function */
        }
      </NavigationContainer> 
<Outlet/>
    </Fragment>
  )
}

export default Navigation