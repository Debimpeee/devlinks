import React from 'react';
// import React, { useState } from 'react';
import "./PasswordInput.css";
// import { FaRegEyeSlash } from "react-icons/fa6";
// import { FaRegEye } from "react-icons/fa6";


const PasswordInput = ({ password, setPassword, focused, setFocused, error }) => {
  
  // const[showPassword, setShowPassword] = useState(false)

  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword)
  // }
  
  return (
    <div className='password'>
      <label htmlFor="password" className={error ? 'error' : ''}>Password</label>
      <div className={`passwordWrapper ${focused ? 'focused' : ''} ${error ? 'error' : ''}`}>
        <div className="lockIcon">
          <img src="images/ph_lock-key-fill.svg" alt="lock-key" />
        </div>
        <input
          // type={showPassword ? "text" : "password"}
          type="password"
          id='password1'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required
          autoComplete="new-password"
        />
        {/* <div className="togglePasswordIcon" onClick={toggleShowPassword}>
        {showPassword? <FaRegEye/> : <FaRegEyeSlash/>}
        </div> */}
      </div>
      {error && <div className="errorMessage">{error}</div>}
    </div>
  );
}

export default PasswordInput;


