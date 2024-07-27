import React from 'react';
import "./PasswordInput.css";

const PasswordInput = ({ password, setPassword, focused, setFocused, error }) => {
  return (
    <div className='password'>
      <label htmlFor="password" className={error ? 'error' : ''}>Password</label>
      <div className={`passwordWrapper ${focused ? 'focused' : ''} ${error ? 'error' : ''}`}>
        <div className="lockIcon">
          <img src="images/ph_lock-key-fill.svg" alt="lock-key" />
        </div>
        <input
          type="password"
          id='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required
        />
      </div>
      {error && <div className="errorMessage">{error}</div>}
    </div>
  );
}

export default PasswordInput;



