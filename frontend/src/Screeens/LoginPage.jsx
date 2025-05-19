import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const LoginPage = () => {
  const handleSuccess = (credentialResponse) => {
    // send token to backend for verification
    axios.post('/api/auth/google', {
      token: credentialResponse.credential,
    })
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => console.log('Login Failed')}
    />
  );
};
