import React from 'react'
import "./Header.css"
import { LuLink } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className="heatherContent">
        <div className="dev">
            <img src="images/Group 252.svg" alt="logo-image" />
        </div>

        <div className="linkPrev">
            <NavLink to="/" className="links" activeClassName="active" exact>
                <LuLink size={20}/>
                <h3>Link</h3>
            </NavLink>

            <NavLink to="/profile" className="user"
            activeClassName="active" exact>
                <CgProfile size={20}/>
                <h3>Profile Details</h3>
            </NavLink>
        </div>

        <div className="prev">
            <h3>Preview</h3>
        </div>
      </div>
    </div>
  )
}

export default Header
