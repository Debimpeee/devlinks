import React, { useState } from 'react'
import './Platform.css'

const Platform = () => {
  const [platform, setPlatform] = useState("Github")

  return (
    <div className='platform'>
      <label>
        Platform
        <select 
        value={platform}
        onChange={e=> setPlatform(e.target.value)}>
          <option value="Github">Github</option>
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

export default Platform















