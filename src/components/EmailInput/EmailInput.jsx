import React from 'react'
import "./EmailInput.css"

const EmailInput = ({email, setEmail, focused, setFocused, error}) => {
  return (
    <div className='emailInput'>
        <label htmlFor="email" className={error ? 'error' : ''}>Email address</label>
        <div className={`inputWrapper ${focused ? 'focused' : ''} ${error ? 'error' : ''}`}>
            <div className="EmailIcon">
                <img src="images/ph_envelope-simple-fill.svg" alt="envelope-simple"/>
            </div>
            <input 
              type="email"
              id="email"
              placeholder='e.g. alex@email.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={()=> setFocused(true)}
              onBlur={()=> setFocused(false)}
              autoComplete="email" 
              required
              />
        </div>
        {error && <div className='errorMessage'>{error}</div>}
    </div>
  )
}

export default EmailInput

















