import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmailInput from '../../components/EmailInput/EmailInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import ConfirmPassword from '../../components/ConfirmPassword/ConfirmPassword';
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("ConfirmPassword:", confirmPassword);
    navigate('/login');
  };

  return (
    <div className='signupCont'>
      <div className="signupSplit">
        <div className="logo">
          <img src="images/Group 252.svg" alt="logo-image" />
        </div>
        <form onSubmit={handleSubmit} className='signFormCont'>
          <div className="textArea">
            <h1>Create account</h1>
            <h4>Let’s get you started sharing your links!</h4>
          </div>
          <EmailInput 
          email={email}
          setEmail={setEmail}
          focused={emailFocused}
          setFocused={setEmailFocused}
           />
          <PasswordInput 
          password={password}
          setPassword={setPassword}
          focused={passwordFocused}
          setFocused={setPasswordFocused}
          />
          <ConfirmPassword
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          focused={confirmPasswordFocused}
          setFocused={setConfirmPasswordFocused}
          />
          <h6>Password must contain at least 8 characters</h6>
          <button type='submit'>Create new account</button>
          <p>Already have an account? <Link style={{ textDecoration: "none" }} to="/login"><span>Login</span></Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;



























