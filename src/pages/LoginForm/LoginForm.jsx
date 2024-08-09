import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmailInput from '../../components/EmailInput/EmailInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import "./LoginForm.css";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
 
  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false

    if(email === ""){
      setEmailError("Can't be empty")
      hasError = true
    } else if(!emailPattern.test(email)){
      setEmailError("Invalid email format")
      hasError = true
    } else {
      setEmailError("")
    }

    if(password === ""){
      setPasswordError("Please check again")
      hasError = true
    } else if(!passwordPattern.test(password)){
      setPasswordError("Password must be atleast 8 characters")
      hasError = true
    } else {
      setPasswordError("")
    }

    if(!hasError){
      console.log("Email:", email);
      console.log("Password:", password);
      navigate('/home');
    }
  };

  const isButtonDisabled = (email !== "" && !emailPattern.test(email)) || (password !== "" && !passwordPattern.test(password));

  return (
    <div className="formCont">
      <div className="mainCont">
        <div className="logo">
          <img src="images/Group 252.svg" alt="logo-image" />
        </div>
        <form onSubmit={handleSubmit} className='loginForm'>
          <div className="formText">
            <h1>Login</h1>
            <h4>Add your details below to get back into the app</h4>
          </div>
          <EmailInput 
          email={email}
          setEmail={setEmail}
          focused={emailFocused}
          setFocused={setEmailFocused}
          error={emailError}
           />
          <PasswordInput 
          password={password}
          setPassword={setPassword}
          focused={passwordFocused}
          setFocused={setPasswordFocused}
          error={passwordError}
          />
          <button type='submit' disabled={isButtonDisabled} className={isButtonDisabled ? "disabled" : ""}>Login</button>
          <p>Don’t have an account? <Link style={{ textDecoration: "none" }} to="/signup"><span>Create account</span></Link></p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;



