import React from 'react'
import "./FrameTwo.css"
import SkeletonTwo from '../../components/SkeletonTwo/SkeletonTwo'
import { Link } from 'react-router-dom'
import { PiEqualsLight } from "react-icons/pi";
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown'
import Links from '../../components/Links/Links'
import SimpleBarReact from "simplebar-react";

import 'simplebar-react/dist/simplebar.min.css';

const FrameTwo = () => {
  return (
    <div className='frameTwo'>
      <div className="screen">
        <SkeletonTwo/>
      </div>

      <div className="customize">
        <div className="customizeCont">
          <div className="customizeText">
              <h3>Customize your links</h3>
              <p>Add/edit/remove links below and then share all your profiles with the world!</p>
          </div>
          <Link to="/frameTwo" className="addLink">
              <p>+</p>
              <p>Add new link</p>
          </Link>
          
          <SimpleBarReact >
            <div className="dropDownCont">

              <div className="dropDown">
                <div className="reLink">
                  <div className="hash">
                      <PiEqualsLight />
                      <h4>Link#1</h4>
                  </div>
                      <h4>Remove</h4>
                </div>
                
                <div className="linksDropDown">
                  <CustomDropdown/>
                </div>

                <div className="linkDropDown">
                  <Links/>
                </div>

              </div>
            </div>
          </SimpleBarReact>
        </div>

        <hr />
        <div className="btnContt">
          <button>Save</button>
        </div>
        
      </div>

    </div>
  )
}

export default FrameTwo


