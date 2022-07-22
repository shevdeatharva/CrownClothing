import SignupForm from '../../component/sign-up-form/signupform.component';
import SignInForm from '../../component/sign-in-form copy/sign-in-form.component';
import './authentication.styles.scss'
const Authentication = () => {
 
  return (
    <div className='authentication-container'>
      <SignInForm/>
      <SignupForm />
     </div>
  )

  }
export default Authentication