import React, { useState } from 'react'
import "./FrameTwo.css"
import SkeletonTwo from '../../components/SkeletonTwo/SkeletonTwo'
import { PiEqualsLight } from "react-icons/pi";
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown'
import Links from '../../components/Links/Links'
import SimpleBarReact from "simplebar-react";
import platform from "../../components/platform.json"

import 'simplebar-react/dist/simplebar.min.css';

const FrameTwo = () => {
  const [dropDown, setDropDown] = useState([])
  const [selectedPlatform, setSelectedPlatform] = useState([])

  const addDropDown = () =>{
    setDropDown([...dropDown, {}])
  } 

  const removeDropDown = (indexToRemove) => {
    setDropDown(dropDown.filter((_, index) => index !== indexToRemove))
    setSelectedPlatform(selectedPlatform.filter((_, index) => index !== indexToRemove))
  }

  const handleSelection = (selectedPlatform, index) => {
    const updatedPlatform = [...selectedPlatform];
    updatedPlatform[index] = selectedPlatform;
    setSelectedPlatform(updatedPlatform)
  }

  const handleSave = () => {
    console.log('Saved platforms:', selectedPlatform);
  }

  return (
    <div className='frameTwo'>
      <div className="screenTwo">
        <SkeletonTwo platform={selectedPlatform}/>
      </div>

      <div className="customizee">
        <div className="customizeeCont">
          <div className="customizeText">
              <h3>Customize your links</h3>
              <p>Add/edit/remove links below and then share all your profiles with the world!</p>
          </div>
          <div className="addLinkTwo" onClick={addDropDown}>
              <p>+</p>
              <p>Add new link</p>
          </div>

          <SimpleBarReact style={{ height: '450px'}}>
            <div className="dropDownCont">
              {dropDown.map((_, index) => (
              <div key={index} className="dropDown">
                <div className="reLink">
                  <div className="hash">
                      <PiEqualsLight />
                      <h4>Link#{index + 1}</h4>
                  </div>
                      <h4 onClick={() => removeDropDown(index)}>Remove</h4>
                </div>
                
                <div className="linksDropDown">
                  <CustomDropdown
                    onSelect={(platform) => handleSelection(platform, index)}
                    platform={platform}
                  />
                </div>

                <div className="linkDropDown">
                  <Links/>
                </div>
              </div>
              ))}
            </div>
          </SimpleBarReact>
        </div>

        <hr />
        <div className="btnContt">
          <button onClick={handleSave}>Save</button>
        </div>
        
      </div>

    </div>
  )
}

export default FrameTwo


