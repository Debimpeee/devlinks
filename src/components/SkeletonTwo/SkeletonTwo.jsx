import React from 'react'
import "./SkeletonTwo.css"
import SimpleBarReact from "simplebar-react";
import AllLinks from '../../components/AllLinks/AllLinks';
import { IoIosArrowRoundForward } from "react-icons/io";

import 'simplebar-react/dist/simplebar.min.css';

const SkeletonTwo = () => {
  return (
    <div className='skeletonTwo'>
        <div className="skeletonTwoCont">
            <div className="notch"></div>
            
                <div className="content">
                    <div className="top">
                        <div className="skelPhoto"></div>
                        <div className="skelText">
                            <div className="hthree"></div>
                            <div className='paraG'></div>
                        </div>
                    </div>
                    <SimpleBarReact style={{ maxHeight: '300px', width: '100%' }}>
                            <div className="bottom">

                                <div  style={{background: '#1A1A1A'}}>
                                    <div className="sub">
                                        <img src="images/github-solid.svg" alt="" />
                                        <p>Github</p>
                                    </div>
                                    <IoIosArrowRoundForward size={20} />
                                </div>

                                <div style={{background: '#ffff'}}>
                                    <div className="sub" style={{background: '#ffff'}}>
                                        <img src="images/frontend-solid.svg" alt="" />
                                        <p>Frontend Mentor</p>
                                    </div>
                                    <IoIosArrowRoundForward size={20} />
                                </div>

                                <div style={{background: '#43B7E9'}}>
                                    <div className="sub" style={{background: '#43B7E9'}}>
                                        <img src="images/twitter-solid.svg" alt="" />
                                        <p>Twitter</p>
                                    </div>
                                    <IoIosArrowRoundForward size={20} />
                                </div>    

                                <div style={{background: '#1A1A1A'}}>
                                    <div className="sub">
                                        <img src="images/linkedin-solid.svg" alt="" />
                                        <p>LinkedIn</p>
                                    </div>
                                    <IoIosArrowRoundForward size={20} />
                                </div>    

                                <div>
                                    <div className="sub" style={{background: '#EE3939'}}>
                                        <img src="images/youtube-solid.svg" alt="" />
                                        <p>Youtube</p>
                                    </div>
                                    <IoIosArrowRoundForward size={20} />
                                </div>    

                                <div>
                                    <div className="sub" style={{background: '#2442AC'}}>
                                        <img src="images/facebook-solid.svg" alt="" />
                                        <p>Facebook</p>
                                    </div>
                                    <IoIosArrowRoundForward size={20} />
                                </div> 

                                <div>
                                    <div className="sub" style={{background: '#EE3FC8'}}>
                                        <img src="images/twitch-solid.svg" alt="" />
                                        <p>Twitch</p>
                                    </div>
                                    <IoIosArrowRoundForward size={20} />
                                </div>    

                                <div>
                                    <div className="sub" style={{background: '#333333'}}>
                                        <img src="images/devto-solid.svg" alt="" />
                                        <p>Dev.to</p>
                                    </div>
                                    <IoIosArrowRoundForward size={20} />
                                </div>    

                                <div>
                                    <div className="sub" style={{background: '#8A1A50'}}>
                                        <img src="images/codewars-solid.svg" alt="" />
                                        <p>Codewars</p>
                                    </div>
                                    <IoIosArrowRoundForward size={20} />
                                </div>    

                                <div>
                                    <div className="sub" style={{background: '#302267'}}>
                                        <img src="images/codepen-solid.svg" alt="" />
                                        <p>FreeCodeCamp</p>
                                    </div>
                                    <IoIosArrowRoundForward size={20} />
                                </div>    

                                <div>
                                    <div className="sub" style={{background: '#EB4925'}}>
                                        <img src="images/gitlab-solid.svg" alt="" />
                                        <p>Gitlab</p>
                                    </div>
                                    <IoIosArrowRoundForward size={20} />
                                </div>    

                                <div>
                                    <div className="sub" style={{background: '#0330D1'}}>
                                        <img src="images/hashnode-solid.svg" alt="" />
                                        <p>Hashnode</p>
                                    </div>
                                    <IoIosArrowRoundForward size={20} />
                                </div>    

                                <div>
                                    <div className="sub" style={{background: '#1A1A1A'}}>
                                        <img src="images/stackoverflow-solid.svg" alt="" />
                                        <p>Stack Overflow</p>
                                    </div>
                                    <IoIosArrowRoundForward size={20} />
                                </div>    
                            </div>
                    </SimpleBarReact>
                </div>
        </div>
    </div>
  )
}

export default SkeletonTwo

