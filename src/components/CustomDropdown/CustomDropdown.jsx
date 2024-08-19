import React, { useState } from 'react'
import './CustomDropdown.css'
import platform from "../platform.json"
import SimpleBarReact from "simplebar-react";

import 'simplebar-react/dist/simplebar.min.css';

const CustomDropdown = () => {
    const [selectedPlatform, setSelectedPlatform] = useState(platform[0])
    const [isOpen, setIsOpen] = useState(false)

    const handleSelection = (platform) =>{
      setSelectedPlatform(platform)
      setIsOpen(false)
    }

  return (
    <div className='customDropdown'>
        <label>
            Platform
            <div className={`dropdown ${isOpen ? 'dropdownOpen' : ''}`}
              onClick={() => setIsOpen(!isOpen)}>
                <div className="selected">
                  <img src={selectedPlatform.image} alt={selectedPlatform.name} />
                  {selectedPlatform.name}
                </div>
                {isOpen && (
                // <SimpleBarReact style={{maxHeight: '343px', overflowY: 'auto'}}>
                <SimpleBarReact>
                  <ul className='dropDownList'>
                    {platform.map((platform, index) => (
                      <li key={index} onClick={() => handleSelection(platform)}>
                        <img src={platform.image} alt={platform.name}/>
                        {platform.name}
                        <hr />
                      </li>
                    ))}
                  </ul>
                </SimpleBarReact>
                )} 
             </div>
        </label>
    </div>
  )
}

export default CustomDropdown




