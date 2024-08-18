import React, { useState } from 'react'
import './CustomDropdown.css'
import platform from "../platform.json"

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
                  <ul className='dropDownList'>
                    {platform.map((platform, index) => (
                      <li key={index} onChangeCapture={() => handleSelection(platform)}>
                        <img src={platform.image} alt={platform.name}/>
                        {platform.name}
                        <hr />
                      </li>
                    ))}
                  </ul>
                )} 
             </div>
        </label>
      
    </div>
  )
}

export default CustomDropdown






// import React, { useState } from 'react';
// import './CustomDropdown.css';
// import platform from './platform.json';

// const CustomDropdown = () => {
//     const [selectedPlatform, setSelectedPlatform] = useState(platform[0]);

//     const handleSelect = (platform) => {
//         setSelectedPlatform(platform);
//     };

//     return (
//         <div className='customDropdown'>
//             <label>
//                 Platform
//                 <div className="dropdown">
//                     <div className="selected-option">
//                         <img src={selectedPlatform.icon} alt={selectedPlatform.name} />
//                         {selectedPlatform.name}
//                     </div>
//                     <div className="options">
//                         {platform.map((platformItem, index) => (
//                             <div 
//                                 key={index}
//                                 className="option"
//                                 onClick={() => handleSelect(platformItem)}
//                             >
//                                 <img src={platformItem.icon} alt={platformItem.name} />
//                                 {platformItem.name}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </label>
//         </div>
//     );
// };

// export default CustomDropdown;
