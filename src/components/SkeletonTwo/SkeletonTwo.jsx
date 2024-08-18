import React from 'react'
import "./SkeletonTwo.css"
import SimpleBarReact from "simplebar-react";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

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
                            <div className="bottomTwo">

                                <div className='divide' style={{background: '#1A1A1A'}}>
                                    <div className="sub">
                                        <img src="images/github-solid.svg" alt="" />
                                        <p>Github</p>
                                    </div>
                                    <div className="sidearr">
                                        <HiOutlineArrowSmallRight size={15} style={{color: '#ffff'}} />                                        
                                    </div>
                                </div>

                                <div className='divide' style={{background: '#ffff', border: '1px solid #D9D9D9'}}>
                                    <div className="sub">
                                        <img src="images/frontend-solid.svg" alt="" />
                                        <p style={{color: '#000'}}>Frontend Mentor</p>
                                    </div>
                                    <div className="sidearr">
                                        <HiOutlineArrowSmallRight size={15} style={{color: '#000'}} />                                        
                                    </div>
                                </div>

                                <div className='divide' style={{background: '#43B7E9'}}>
                                    <div className="sub">
                                        <img src="images/twitter-solid.svg" alt="" />
                                        <p>Twitter</p>
                                    </div>
                                    <div className="sidearr">
                                        <HiOutlineArrowSmallRight size={15} style={{color: '#ffff'}} />                                        
                                    </div>
                                </div>    

                                <div className='divide' style={{background: '#1A1A1A'}}>
                                    <div className="sub">
                                        <img src="images/linkedin-solid.svg" alt="" />
                                        <p>LinkedIn</p>
                                    </div>
                                    <div className="sidearr">
                                        <HiOutlineArrowSmallRight size={15} style={{color: '#ffff'}} />                                        
                                    </div>
                                </div>    

                                <div className='divide' style={{background: '#EE3939'}}>
                                    <div className="sub">
                                        <img src="images/youtube-solid.svg" alt="" />
                                        <p>Youtube</p>
                                    </div>
                                    <div className="sidearr">
                                        <HiOutlineArrowSmallRight size={15} style={{color: '#ffff'}} />                                        
                                    </div>
                                </div>    

                                <div className='divide' style={{background: '#2442AC'}}>
                                    <div className="sub">
                                        <img src="images/facebook-solid.svg" alt="" />
                                        <p>Facebook</p>
                                    </div>
                                    <div className="sidearr">
                                        <HiOutlineArrowSmallRight size={15} style={{color: '#ffff'}} />                                        
                                    </div>
                                </div> 

                                <div className='divide' style={{background: '#EE3FC8'}}>
                                    <div className="sub">
                                        <img src="images/twitch-solid.svg" alt="" />
                                        <p>Twitch</p>
                                    </div>
                                    <div className="sidearr">
                                        <HiOutlineArrowSmallRight size={15} style={{color: '#ffff'}} />                                        
                                    </div>
                                </div>    

                                <div className='divide' style={{background: '#333333'}}>
                                    <div className="sub" >
                                        <img src="images/devto-solid.svg" alt="" />
                                        <p>Dev.to</p>
                                    </div>
                                    <div className="sidearr">
                                        <HiOutlineArrowSmallRight size={15} style={{color: '#ffff'}} />                                        
                                    </div>
                                </div>    

                                <div className='divide' style={{background: '#8A1A50'}}>
                                    <div className="sub">
                                        <img src="images/codewars-solid.svg" alt="" />
                                        <p>Codewars</p>
                                    </div>
                                    <div className="sidearr">
                                        <HiOutlineArrowSmallRight size={15} style={{color: '#ffff'}} />                                        
                                    </div>
                                </div>    

                                <div className='divide' style={{background: '#302267'}}>
                                    <div className="sub">
                                        <img src="images/codepen-solid.svg" alt="" />
                                        <p>FreeCodeCamp</p>
                                    </div>
                                    <div className="sidearr">
                                        <HiOutlineArrowSmallRight size={15} style={{color: '#ffff'}} />                                        
                                    </div>
                                </div>    

                                <div className='divide' style={{background: '#EB4925'}}>
                                    <div className="sub">
                                        <img src="images/gitlab-solid.svg" alt="" />
                                        <p>Gitlab</p>
                                    </div>
                                    <div className="sidearr">
                                        <HiOutlineArrowSmallRight size={15} style={{color: '#ffff'}} />                                        
                                    </div>
                                </div>    

                                <div className='divide' style={{background: '#0330D1'}}>
                                    <div className="sub">
                                        <img src="images/hashnode-solid.svg" alt="" />
                                        <p>Hashnode</p>
                                    </div>
                                    <div className="sidearr">
                                        <HiOutlineArrowSmallRight size={15} style={{color: '#ffff'}} />                                        
                                    </div>
                                </div> 

                                <div className='divide' style={{background: '#1A1A1A'}}>
                                    <div className="sub">
                                        <img src="images/stackoverflow-solid.svg" alt="" />
                                        <p>Stack Overflow</p>
                                    </div>
                                    <div className="sidearr">
                                        <HiOutlineArrowSmallRight size={15} style={{color: '#ffff'}} />                                        
                                    </div>
                                </div>    
                            </div>
                    </SimpleBarReact>
                </div>
        </div>
    </div>
  )
}

export default SkeletonTwo































