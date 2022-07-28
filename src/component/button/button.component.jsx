/*
we need focus on we have three different kinda of button
regular button
inverted button
google sign in button
 */
// creating object for button type. type will change as it render
import { BaseButton, GoogleButton, InvertedButton } from './button.styles.jsx'
export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted'
}
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
({
  [BUTTON_TYPE_CLASSES.base]: BaseButton, 
  [BUTTON_TYPE_CLASSES.google]: GoogleButton, 
  [BUTTON_TYPE_CLASSES.inverted]: InvertedButton, 
}[buttonType]
)
const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton= getButton(buttonType)
  return(
    <div>
      <CustomButton {...otherProps}>{children}
      </CustomButton>
 </div>
  )
}
export default Button;