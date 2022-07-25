import { useState} from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth }  from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.compo";
import './sign-up-form.styles.scss'
import Button from "../button/button.component";


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword:""
}

const SignupForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField


 console.log('Hit');
  
  const resetFormField = () => {
    setFormField(defaultFormFields);
}


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('your password didnot match');
      return;
    }
      try {
        const {user}= await createAuthUserWithEmailAndPassword(email, password)
      
        await createUserDocumentFromAuth(user, { displayName })
        resetFormField();
       // console.log(user);
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          alert('cannot create user, email already in use')
        } else {
          
          console.log(error);
        }
}

}
  const handleChange = (event) => {
   
    const {name, value} = event.target;
    setFormField({ ...formField,[name]:value })
  }
  return (
    <div className="sign-up container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your Email and Password</span>
      <form onSubmit={handleSubmit}>
     
        <FormInput
          label='display Name'
          type='text' required name="displayName" onChange={handleChange}
          value={displayName } />

      
        <FormInput label='Email'
          type='email' required onChange={handleChange} name="email"
      value={email}  />
      
        <FormInput label='Password'
          required onChange={handleChange} name="password"
        value={password}/>
      
        <FormInput
          label="confirm Password "
          type="password" required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword} />
        <Button type="submit" >Sign Up</Button>
        </form>
    </div>
  )
}
export default SignupForm