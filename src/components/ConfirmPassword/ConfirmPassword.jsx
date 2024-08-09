import React from 'react'
import "./ConfirmPassword.css"

const PasswordInput = ({confirmPassword, setConfirmPassword, focused, setFocused}) => {
  return (
    <div className='confirmPassword'>
      <label htmlFor="confirmPassword">Confirm password</label>
      <div className={`confirmPasswordWrapper ${focused ? 'focused' : ''}`}>
        <div className="lockIcon">
            <img src="images/ph_lock-key-fill.svg" alt="lock-key"/>
        </div>
        <input 
        type="password"
        id='password2'
        placeholder='Enter your password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onFocus={()=> setFocused(true)}
        onBlur={()=> setFocused(false)}
        required
        />
      </div>
    </div>
  )
}

export default PasswordInput




























