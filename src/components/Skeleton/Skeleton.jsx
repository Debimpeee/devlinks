import React from 'react'
import "./Skeleton.css"
import SimpleBarReact from "simplebar-react";

import 'simplebar-react/dist/simplebar.min.css';

const Skeleton = () => {
  return (
    <div className='skeleton'>
        <div className="skeletonCont">
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
                                <div></div>
                                <div></div>
                                <div></div>    
                                <div></div>    
                                <div></div>    
                                <div></div>    
                                <div></div>    
                                <div></div>    
                                <div></div>    
                                <div></div>    
                                <div></div>    
                                <div></div>    
                                <div></div>    
                                <div></div>    
                            </div>
                    </SimpleBarReact>
                </div>
        </div>
    </div>
  )
}

export default Skeleton

