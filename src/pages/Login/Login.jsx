import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, getRedirectResult } from 'firebase/auth';
import LoginForm from "../LoginForm/LoginForm"


const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          // User is signed in.
          const user = result.user;
          console.log('User signed in:', user);
          // Redirect to the desired page after sign-in
          navigate('/home');
        }
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
      });
  }, [auth, navigate]);

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
