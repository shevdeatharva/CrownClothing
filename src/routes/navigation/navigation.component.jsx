import {Fragment, useContext} from "react";
import { Outlet, Link } from 'react-router-dom'

import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropDown from "../../component/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import './navigation.styles.scss'
import { UserContext } from "../../context/usercontext.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../context/cartdropContext";


const Navigation = () => {
  const { currentUser} = useContext(UserContext)
const {isCartOpen}= useContext(CartContext)
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
        <CrwnLogo/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out </span>
          ): (<Link className="nav-link" to='/Auth'>
          SIGN IN
          </Link>
          )}
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropDown/>}   {/* isCartOpen wrap around double ampersand which is known as short circuit operator which actually check the truthiness 
        value between both must be evaluate as truthy value for executing it. 
        
        cartDropDown are actally are truthy value bcoz it is component which is always
        true by default bcoz it contains function*/}
      </div> 
<Outlet/>
    </Fragment>
  )
}

export default Navigation