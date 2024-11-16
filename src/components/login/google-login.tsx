import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { submitAddUserAction } from '../../redux/store/user/user-actions';
import { useAppDispatch } from '../../redux/store/hooks';
import { useAuth } from '../hooks/AuthProvider';
export default function GoogleLoginComponent() {
  const dispatch = useAppDispatch();
  const auth = useAuth();
  const handleLoginSuccess = (credentialResponse: any) => {
    // Send the response to your backend for verification and user creation

    interface JwtPayload {
      email: string;
      family_name: string;
      given_name: string;
      picture: string;
      name: string;
    }


    const realUserData = jwtDecode(credentialResponse.credential) as JwtPayload;
    console.log(realUserData)
    try {
      const data = {
        name: realUserData.name,
        email: realUserData.email,
        lastName: realUserData.family_name,
        firstName: realUserData.given_name,
        password: "",
        picture: realUserData.picture,
        roles: ['guest'],
        createdAt: "",
      }
      dispatch(submitAddUserAction(data));
      auth.login(data)
    } catch (err) {
      console.log(err);
    }
  };

  const handleLoginFailure = (error: any) => {

    console.log(error);
  };

  return (<GoogleLogin
    onSuccess={handleLoginSuccess}
    onError={() => {
      console.log('Login Failed')
    }}

  />)
}