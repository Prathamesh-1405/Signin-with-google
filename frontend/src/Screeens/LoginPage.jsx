import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const LoginPage = () => {
  const handleSuccess = async (credentialResponse) => {
    // send token to backend for verification
    console.log('inside handleSuccess')
    console.log(credentialResponse)
    
    const res = await axios.post('http://localhost:3000/api/auth/google', {
      token: credentialResponse.credential,
    })
      console.log('inside handleSuccess 2')
    console.log(res);
    
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => console.log('Login Failed')}
    />
  );
};

export default LoginPage;
