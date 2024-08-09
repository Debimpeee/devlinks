import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from "../../firebaseConfig"
import { doc, setDoc } from 'firebase/firestore';
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
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const handleSubmit = async (e) => {
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

    if (confirmPassword === "") {
      setConfirmPasswordError("Can't be empty");
      hasError = true;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      hasError = true;
    } else {
      setConfirmPasswordError("");
    }

    if(!hasError){
      const auth = getAuth()
      try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user

        console.log("User created:", user);

        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          email: user.email,
          createdAt: new Date()
        })
        navigate("/")
      } catch(error){
        console.error("Error creating user:", error);
        console.log("Error details:", error.message, error.code);

        // setEmailError("Error creating account, please try again");
        if(error.code === 'auth/email-already-in-use'){
          setEmailError("Email already in use")
        } else {
          setFormError("Please fix the errors above and try again")
        }
      }
    } else{
      setFormError("Please fix the errors above and try again")
    }
  }

  const isButtonDisabled = (email !== "" && !emailPattern.test(email)) || (password !== "" && !passwordPattern.test(password));

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
          error={emailError}
           />
          <PasswordInput 
          password={password}
          setPassword={setPassword}
          focused={passwordFocused}
          setFocused={setPasswordFocused}
          error={passwordError}
          />
           <ConfirmPassword
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          focused={confirmPasswordFocused}
          setFocused={setConfirmPasswordFocused}
          error={confirmPasswordError}
          />
          <h6>Password must contain at least 8 characters</h6>
          {formError && <p className='formError'>{formError}</p>}
          <button type='submit' disabled={isButtonDisabled} className={isButtonDisabled ? "disabled" : ""}>Create new account</button>
          <p>Already have an account? <Link style={{ textDecoration: "none" }} to="/login"><span>Login</span></Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;


