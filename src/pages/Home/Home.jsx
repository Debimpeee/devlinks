import React from 'react'
import "./Home.css"
import Skeleton from '../../components/Skeleton/Skeleton'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='home'>
      <div className="screen">
        <Skeleton/>
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
          <div className="getStarted">
              <div className="startedImg">
                <img src="images/Group 273.jpg" alt="" />
              </div>
              <div className="startedText">
                <h3>Let’s get you started</h3>
                <p>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
              </div>
          </div>
        </div>

        <hr />
        <div className="btnCont">
          <button>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Home
