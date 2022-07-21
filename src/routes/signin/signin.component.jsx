import { signInWithGooglePopup} from '../../utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignupForm from '../../component/sign-up-form/signupform.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef= await createUserDocumentFromAuth(user);
  }
  return (
    <div>
      <h1>Sign In Page </h1>
      <button onClick={logGoogleUser}>Sign in google</button>
      <SignupForm/>
     </div>
  )

  }
export default SignIn