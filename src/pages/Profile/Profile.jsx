import React, { useState }  from 'react'
import './Profile.css'
import Skeleton from '../../components/Skeleton/Skeleton'

const Profile = () => {
  // const [showFrameTwo, setShowFrameTwo] = useState(false)

  // const handleAddLinkClick = () =>{
  //   setShowFrameTwo(true)
  // }
  return (
    <div className='profile'>
        <div className="profileScreen">
          <Skeleton/>
        </div>

        <div className="ProfileMain">
          <div className="profileCont">
            <div className="profileText">
                <h3>Profile Details</h3>
                <p>Add your details to create a personal touch to your profile.</p>
            </div>
            <div className="addImage">
                <div className="profilePicText">
                  <p>Profile picture</p>
                </div>
                <div className="image">
                  <img src="images/ph_image.svg" alt="image-icon" />
                  <p>+ Upload Image</p>
                </div>
                <div className="imageSizText">
                  <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
                </div>
            </div>
            {/* <div className="getStarted">
                <div className="startedImg">
                  <img src="images/Group 273.jpg" alt="" />
                </div>
                <div className="startedText">
                  <h3>Let’s get you started</h3>
                  <p>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
                </div>
            </div> */}
          </div>

          <hr />
          <div className="btnCont">
            <button>Save</button>
          </div>
        </div>
    </div>
  )
}

export default Profile
















