import { useState} from 'react'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.compo'
import './sign-in-form.styles.scss'
import Button from '../button/button.component'



const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormFields)
  const { email, password } = formField

  const resetFormField = () => {
    setFormField(defaultFormFields)
  }

  const signInWithGoogle = async () => {
     await signInWithGooglePopup()
    
  }


  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
    await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
 
      resetFormField()

    } catch (error) {
      switch (error.code) {
        case ('auth/wrong-password'):
          alert('incorrect password');
          break;
        case ('auth/user-not-found'):
          alert('user not found');
          break;
        default:
          console.log(error);
      }
}
  }
  

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormField({ ...formField, [name]: value })
  }
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className='buttons-container'>

          <Button type="submit">Sign In</Button>
          
          <Button type='button' buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
         
        </div>
      </form>
    </div>
  )
}
export default SignInForm
