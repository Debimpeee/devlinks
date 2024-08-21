import React, { useState } from 'react'
import './Links.css'

const Links = () => {
    const [link, setLink] = useState()

    const handleInputChange = (e) => {
        setLink(e.target.value)
    }

  return (
    <div className='linkLabel'>
      <label>
        Link
        <div className="inputBox">
            <img src="images/link-bold.svg" alt="" />
            <input 
            type="text" 
            value={link}
            onChange={handleInputChange}
            placeholder='e.g. https://www.github.com/johnappleseed'
            required/>
        </div>
      </label>
    </div>
  )
}

export default Links
































































