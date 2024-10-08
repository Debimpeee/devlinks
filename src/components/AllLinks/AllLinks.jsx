import React, { useState } from 'react'
import './AllLinks.css'

const AllLinks = () => {
  const [linkList, setLinkList] = useState("Github")

  return (
    <div className='allLinks'>
      <label>
        Platform
        <select 
        value={linkList}
        onChange={e=> setLinkList(e.target.value)}>
          <option value="Github">
            <img src="images/github-bold.svg" alt="github-bold" />
            Github
          </option>
          <option value="Frontend Mentor">Frontend Mentor</option>
          <option value="Twitter">Twitter</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Youtube">Youtube</option>
          <option value="Facebook">Facebook</option>
          <option value="Twitch">Twitch</option>
          <option value="Dev.to">Dev.to</option>
          <option value="Codewars">Codewars</option>
          <option value="Codepen">Codepen</option>
          <option value="GitLab">GitLab</option>
          <option value="Hashnode">Hashnode</option>
          <option value="Stack Overflow">Stack Overflow</option>
        </select>
      </label>
    </div>
  )
}

export default AllLinks
















